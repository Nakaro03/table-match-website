import { chromium } from "playwright"
import { mkdir, writeFile } from "node:fs/promises"
import path from "node:path"

const outputDir = path.resolve("docs/design-previews/final")
const requestedPage = process.env.CAPTURE_PAGE
const pages = [
  ["home", "/"],
  ["projects", "/projects"],
  ["project-detail", "/projects/regional-startup-internship"],
  ["topics", "/topics"],
  ["topic-detail", "/topics/student-found-next-step"],
  ["news", "/news"],
  ["news-detail", "/news/fukuoka-6-preview"],
  ["about", "/about"],
  ["team", "/team"],
  ["for-companies", "/for-companies"],
  ["student-apply", "/apply/regional-startup-internship"],
  ["company-apply", "/apply/company/company-participation"],
  ["privacy", "/privacy"],
  ["apply-complete", "/apply/complete?code=TM-DEMO&type=student"],
  ["admin-login", "/admin/login"],
].filter(([name]) => !requestedPage || name === requestedPage)
const viewports = [
  ["desktop", { width: 1440, height: 1000 }],
  ["mobile", { width: 390, height: 844 }],
]

await mkdir(outputDir, { recursive: true })
const browser = await chromium.launch({ headless: true })
const audit = []
try {
  for (const [viewportName, viewport] of viewports) {
    const context = await browser.newContext({ viewport, deviceScaleFactor: 1 })
    const page = await context.newPage()
    for (const [name, route] of pages) {
      await page.goto(`http://127.0.0.1:3000${route}`, { waitUntil: "networkidle" })
      await page.evaluate(async () => {
        document.querySelectorAll("img").forEach((image) => { image.loading = "eager" })
        for (let y = 0; y < document.documentElement.scrollHeight; y += 650) {
          window.scrollTo(0, y)
          await new Promise((resolve) => setTimeout(resolve, 120))
        }
        window.scrollTo(0, 0)
      })
      await page.waitForLoadState("networkidle")
      await page.waitForTimeout(500)
      const result = await page.evaluate(() => ({
        viewportWidth: window.innerWidth,
        documentWidth: document.documentElement.scrollWidth,
        brokenImages: Array.from(document.images)
          .filter((image) => !image.complete || image.naturalWidth === 0)
          .map((image) => image.getAttribute("src")),
      }))
      audit.push({ name, route, viewport: viewportName, ...result })
      await page.screenshot({ path: path.join(outputDir, `${name}-${viewportName}.png`), fullPage: true })
    }
    await context.close()
  }
} finally {
  await browser.close()
}
await writeFile(path.join(outputDir, "audit.json"), `${JSON.stringify(audit, null, 2)}\n`)
