# karabiner-config

macOS用のKarabiner-Elements設定ファイルを管理するプロジェクトです。

## 概要

[Karabiner-Elements](https://karabiner-elements.pqrs.org/)は、macOSのキーボードカスタマイズツールです。
このプロジェクトでは、[karabiner-ts](https://deno.land/x/karabinerts)を使用してTypeScriptでKarabinerの設定を生成します。

## 通知機能

設定適用時に視覚的・聴覚的フィードバックを提供：

- 成功時：成功通知と効果音
- 失敗時：エラー通知と警告音

## インストール方法

### 必要条件

1. [Deno](https://deno.land/)
2. [Karabiner-Elements](https://karabiner-elements.pqrs.org/)

### セットアップ

1. clone

   ```bash
   git clone https://github.com/yourusername/karabiner-config.git
   cd karabiner-config
   ```

2. run

   ```bash
   deno run -A index.ts
   ```

vscodeを使用しており、RunOnSaveをインストールしている場合は保存時に自動で実行されます。

## カスタマイズ方法

### キーバインディングの追加・変更

1. `rules/`ディレクトリ内の該当するファイルを編集
2. 新しいルールを追加する場合は、`rules/index.ts`にエクスポートを追加

### 除外アプリケーションの設定

`bundle-identifiers.ts`を編集して、設定を適用しないアプリケーションを追加・削除できます。
