import type { HeadersFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

/**
 * レスポンスヘッダーを設定する
 * @returns
 */
export const headers: HeadersFunction = () => ({
  // サーバー側で10秒間キャッシュをもつ
  "Cache-Control": "no-store",
});

/**
 * 画面読み込みの際のサーバーサイドの処理
 * @returns
 */
export const loader: LoaderFunction = async () => {
  const serverDate = new Date().toString();
  return json({ serverDate });
};

export default function Cache() {
  const { serverDate } = useLoaderData<typeof loader>();
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-5">
      <p>
        Cache-Control: no-store
        <br />
        サーバー側はキャッシュしない
      </p>
      <div>サーバー</div>
      <div>{serverDate}</div>
    </div>
  );
}
