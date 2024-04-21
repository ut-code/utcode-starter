# ut.code(); Starter

<img alt="" src="./static/img/logo.svg" height="200px" />

[![language: MDX](https://img.shields.io/badge/MDX-1B1F24.svg?logo=mdx)](https://mdxjs.com/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
![license: MIT](https://img.shields.io/badge/license-MIT-informational.svg)
![PRs: welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

[ut.code(); Starter](https://starter.utcode.net/) は、[ut.code();](https://utcode.net/) によって作られた Web プログラミングを学ぶための入門教材です。
さらに、高度な内容は [ut.code(); Learn](https://learn.utcode.net/) で学ぶことができます。

## 目次

- [開発](#開発)
  - [要件](#要件)
  - [環境構築](#環境構築)
  - [開発用サーバーの起動](#開発用サーバーの起動)
  - [ディレクトリ構成](#ディレクトリ構成)
  - [カスタムコンポーネント](#カスタムコンポーネント)
  - [コミットの前に](#コミットの前に)
- [貢献](#貢献)

## 開発

### 要件

- [Node.js](https://nodejs.org/ja/)
- [npm](https://www.npmjs.com/)

### 環境構築

```shell
npm ci
```

### 開発用サーバーの起動

```shell
npm start
```

### ディレクトリ構成

`docs` フォルダ下に作られたファイルは自動でホスティングされます。
`index.mdx` というファイルを編集することで、変更ができます。編集したい階層にある `index.mdx` ファイルを選んで編集してください。
`index.mdx` は Markdown を拡張した MDX という非常に簡単な形式で書かれています。

### カスタムコンポーネント

ut.code(); Learn では、次のカスタムコンポーネントが定義されています。

- Term - 用語にポップアップの説明を付ける
- Answer - 解答例を折りたたんで隠す
- ViewSource - GitHub と CodeSandbox で解答例を表示するボタンを表示する

### コミットの前に

コミットの前に、

```shell
npm run format
```

でフォーマットして、

```shell
npm run build
```

でビルドが通ることを確認してください。

## ライセンス

ut.code(); Learn は [MIT license](https://github.com/ut-code/utcode-starter/blob/master/LICENSE) でライセンスされています。
Copyright © 2023 ut.code();.

## 貢献

Issue や Pull request などはいつでもお待ちしています。

## リリースについて

GitHub の Release を作成すると GitHub Pages にデプロイされます。
