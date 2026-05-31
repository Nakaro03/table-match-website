# 開発研修 第1回 — 自分のプロフィールを長野メンバーに追加しよう

ようこそ！この研修では、Table Matchサイトの開発に **実際にコミット** することを通して、Gitとチーム開発の基本を体験します。

> 終わったとき：本番サイトの「運営チーム → 長野支部」を開き、「メンバーを見る」を押すと **あなたの写真・名前・役割** が表示される状態になります。

---

## ゴール

`components/team.tsx` の **長野支部メンバー（`naganoMembers`）** に自分の情報を1行追加し、写真を `public/images/team/` に置く。
最後に **プルリクエスト（PR）** を出して、オーナーがマージしたら完了。

---

## 必要なもの

| | 内容 |
|---|---|
| GitHubアカウント | https://github.com で無料登録 |
| リポジトリへの招待を承認 | オーナーから届く招待メールの「Accept」を済ませる |
| ツール | **GitHub Desktop**（マウス操作中心・初心者向け） または git コマンド |
| エディタ | **VS Code** など、テキストファイルを編集できるもの |
| 自分の顔写真 | `.jpg` または `.png`。だいたい正方形に近い構図がきれい（自動で円形に切り抜かれます） |

GitHub Desktop は https://desktop.github.com から無料ダウンロードできます。インストール後、GitHubアカウントでログインしてください。

---

## 全体の流れ（10ステップ）

```
① クローン  →  ② ブランチを作る  →  ③ 写真を追加
  →  ④ team.tsx を編集  →  ⑤ コミット  →  ⑥ push
  →  ⑦ プルリク（PR）を作る  →  ⑧ オーナーが確認・マージ
  →  ⑨ 本番に反映  →  ⑩ サイトで自分の表示を確認
```

---

# 手順A：GitHub Desktop（推奨）

## ① リポジトリを自分のPCに取り込む（クローン）

1. GitHub Desktop を起動
2. **File → Clone repository...** をクリック
3. リスト or 「URL」タブから `Nakaro03/table-match-website` を選択
4. ローカルパス（保存場所）はデフォルトでOK → **Clone**

これで自分のPCの中に、リポジトリの完全なコピーが取り込まれました。

## ② 最新の main を取り込む（毎回作業前にやる）

1. 上部の **Current branch** が `main` になっていることを確認
2. **Fetch origin** を押す
3. もし「Pull origin」と表示されたら押して取り込む

## ③ 自分のブランチを作る

> 直接 main を編集してはいけません。**自分専用のブランチ**を作ります。

1. 上部の **Current branch** をクリック → **New branch**
2. ブランチ名を入力。例：
   - `add-nagano-yamada` （add-nagano-<自分の名字ローマ字>）
   - `add-profile-tanaka` でもOK
3. **Create branch** を押す
4. 「このブランチをoriginにpublishしますか？」が出たら **Publish branch**

## ④ 自分の顔写真を追加する

1. ファイル名を **`nagano-2.jpg`** にリネーム
   - 既に `nagano-1.jpg`（後畠さん）があるので次は **2**
   - 他の人と被らないよう、研修Slack等で「自分は nagano-3 使う」のように番号調整を
   - **iPhoneの `.HEIC` は使えません** → 写真アプリで `.jpg` にエクスポートしてからリネーム
2. PCのフォルダで、クローンしたフォルダ内の **`public/images/team/`** を開く
3. 用意した `nagano-2.jpg` をそこに **コピー＆ペースト**

## ⑤ `team.tsx` に自分の情報を追加する

1. VS Code などで **`components/team.tsx`** を開く
2. ファイルの上の方にある `naganoMembers` 配列を探す（だいたい10〜17行目あたり）
3. 既存の後畠さんの `},` の後に、**自分の情報をコピペで追加**：

```ts
export const naganoMembers = [
  {
    name: "後畠 隼輔",
    role: "事務担当",
    university: "公立諏訪東京理科大学 情報応用工学科 3年",
    image: "/images/team/nagano-1.jpg",
  },
  // ↓↓↓ ここから自分の情報を追加 ↓↓↓
  {
    name: "山田 太郎",                              // ← 自分の名前（姓と名の間にスペース）
    role: "SNS担当",                                 // ← 自分の役割
    university: "信州大学 工学部 2年",                // ← 大学・学部・学年
    image: "/images/team/nagano-2.jpg",              // ← 自分が置いた写真のファイル名
  },
  // ↑↑↑ ここまで追加 ↑↑↑
]
```

**注意点**
- 文字列はすべて **半角の `"`（ダブルクォート）** で囲む
- 末尾の **カンマ `,`** を忘れない（行の最後）
- `image` の値は **`/images/team/` で始める**（先頭スラッシュ必須）
- ファイル名は④で置いた写真と完全一致させる

保存（Ctrl+S / Cmd+S）して閉じます。

## ⑥ 変更をコミット（保存ポイントを作る）

1. GitHub Desktop に戻ると、左側に変更したファイル（`team.tsx`, 追加した画像）が出ています
2. 下の **Summary**（メッセージ）欄に、何をしたか一言：
   ```
   長野メンバーに山田太郎を追加
   ```
3. **Commit to add-nagano-yamada**（緑色のボタン）を押す

## ⑦ GitHub に送る（push）

- 上部の **Push origin** をクリック
- これで自分のブランチがGitHubに送られました

## ⑧ プルリクエスト（PR）を作る

1. push直後に出る **Create Pull Request** ボタンを押す（ブラウザが開く）
   - 出なかった場合：GitHubのリポジトリページ → 上部の「**Pull requests**」タブ → **New pull request**
2. **base: main ← compare: add-nagano-yamada** になっていることを確認
3. タイトルを編集（例：「長野支部に山田太郎を追加」）
4. 本文に、自分が何を変更したか書く：
   ```
   ## 内容
   - 長野支部メンバーに自分（山田太郎）を追加
   - 写真 nagano-2.jpg を追加

   ## 確認のお願い
   - 写真や役割の表示に問題ないかご確認ください
   ```
5. 下の緑色のボタン **Create pull request** を押す

## ⑨ オーナーの確認を待つ

- オーナー（中村さん）に「PRを出しました」と一言連絡
- オーナーが内容を確認して **Merge pull request** すると `main` に反映
- 数分後、本番サイトに自動デプロイ
- 修正を求められたら同じブランチで⑤⑥⑦を繰り返せば、PRに自動で反映されます

## ⑩ 本番サイトで確認

- https://table-match-website.vercel.app/ を開く
- **Ctrl+Shift+R**（ハード再読み込み）
- 「運営チーム → 長野支部」をクリック → モーダルで自分が出ていればクリア🎉

---

# 手順B：コマンド（git）でやる場合

GitHub Desktop を使わずコマンドラインで進める人向け：

```bash
# ① クローン（最初の1回だけ）
git clone https://github.com/Nakaro03/table-match-website.git
cd table-match-website

# ② 最新の main にする（作業前に毎回）
git checkout main
git pull

# ③ 自分のブランチを作る
git checkout -b add-nagano-yamada

# ④ 写真を public/images/team/nagano-2.jpg として配置（手作業）
# ⑤ components/team.tsx を編集（エディタで）

# ⑥ コミット
git add public/images/team/nagano-2.jpg components/team.tsx
git commit -m "長野メンバーに山田太郎を追加"

# ⑦ push
git push -u origin add-nagano-yamada

# ⑧ 表示されるURLを開いてPR作成
```

---

# よくある質問・トラブル

### Q. 写真がHEICしか持っていない
A. iPhoneの「写真」アプリで「共有 → ファイルに保存」すると `.jpg` で書き出せます。または、Web上の HEIC→JPG 変換サービスでも可。

### Q. ブランチ名は何でも良い？
A. 半角英数字とハイフンで、何の作業か分かる名前ならOK。日本語・空白・大文字は避ける。

### Q. 同じファイルを別の人が同時に変更したらどうなる？
A. 後からPRを出した人に「コンフリクト」が出ます。慌てず、オーナーに相談してください。

### Q. コミット履歴を間違えた
A. 普通の編集ミスなら、もう一度ファイルを直して⑥⑦をやり直せばOK（同じブランチに上書きされる）。

### Q. PRを承認してもらった後にまた追加変更したい
A. もう一度 ②〜⑧ を別ブランチでやれば新しいPRになります。

### Q. ローカルでサイトの見た目を確認したい
A. 任意。`Node.js 20以上` と `pnpm` をインストールして：
```bash
pnpm install     # 最初の1回だけ
pnpm dev         # 起動
```
ブラウザで http://localhost:3000 → 確認後 Ctrl+C で停止。

---

# このあとの流れ（参考）

- 第1回（今回）：自分の情報を追加 → クローン〜PRまでを体験
- 第2回（予定）：既存セクションの文章を直してみる
- 第3回（予定）：新しい小さなセクションを作ってみる

---

困ったときは、**画面のスクリーンショット**と一緒にチームに相談してください。
焦らずに、1つずつ進めれば必ずできます！がんばってください 🍀
