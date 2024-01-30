import type { HeadersFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

/**
 * レスポンスヘッダーを設定する
 * @returns
 */
export const headers: HeadersFunction = () => ({
  "Cache-Control": "public, max-age=5, s-maxage=10",
});

/**
 * 画面読み込みの際のサーバーサイドの処理
 * @returns
 */
export const loader: LoaderFunction = async () => {
  const serverDate = new Date().toString();
  return json({ serverDate });
};

const clientDate = new Date().toString();

export default function Cache() {
  const { serverDate } = useLoaderData<typeof loader>();
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-5">
      <div>クライアント(5秒)</div>
      <div>{clientDate}</div>
      <div>サーバー(10秒)</div>
      <div>{serverDate}</div>
      <p>public</p>
    </div>
  );
}
