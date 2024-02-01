import type { HeadersFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

/**
 * レスポンスヘッダーを設定する
 * @returns
 */
export const headers: HeadersFunction = () => ({
  "Cache-Control": "max-age=0, s-maxage=30, stale-while-revalidate=30",
});

/**
 * 画面読み込みの際のサーバーサイドの処理
 * @returns
 */
export const loader: LoaderFunction = async () => {
  const serverDate = new Date().toUTCString();
  return json({ serverDate });
};

export default function Cache() {
  const { serverDate } = useLoaderData<typeof loader>();
  const clientDate = new Date().toUTCString();
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-5">
      <p>
        Cache-Control: max-age=0, s-maxage=30, stale-while-revalidate=300
        <br />
        ローカルキャッシュが返却される。キャッシュは10秒で失効する。
      </p>
      <h1>ssr</h1>
      <p>{serverDate}</p>
      <h1>csr</h1>
      <p>{clientDate}</p>
    </div>
  );
}
