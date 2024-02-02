import { LinksFunction } from "@remix-run/node";
import stylesheet from "./tailwind.css";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  MetaFunction,
  ScrollRestoration,
} from "@remix-run/react";

/**
 * メタデータを設定する
 * @returns
 */
export const meta: MetaFunction = () => {
  return [
    { title: "Remix Play Ground" },
    {
      property: "og:title",
      content: "Remix Play Ground",
    },
    {
      name: "description",
      content: "Remix Play Ground",
    },
  ];
};

/**
 * リンクデータを設定する
 * @returns
 */
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

/**
 * ルートレイアウト
 * 全画面の共通定義をまとめる
 * @returns
 */
export default function App() {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* links関数のリンク情報をlinkタグに変換して設定する。 */}
        <Links />

        {/* meta関数のメタ情報をmetaタグに変換して設定する。 */}
        <Meta />
      </head>
      <body>
        {/* ルーティングで埋め込まれるコンポーネント。ルーティングしないなら消してもよい。 */}
        <Outlet />

        {/* 再レンダー時やドメインなどをまたいだときにスクロール位置を復元する機能。 */}
        <ScrollRestoration />

        {/* JavaScriptを実行するためのscriptsタグを生成する。 */}
        <Scripts />

        {/* 開発環境でのライブリロードを有効にする。製品環境では自動的に消えるので書いておいてよい。 */}
        <LiveReload />
      </body>
    </html>
  );
}
