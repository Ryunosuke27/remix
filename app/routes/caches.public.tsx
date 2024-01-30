import type { HeadersFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

/**
 * レスポンスヘッダーを設定する
 * @returns
 */
export const headers: HeadersFunction = () => ({
  // サーバー側で10秒間キャッシュをもつ
  "Cache-Control": "public,  max-age=3600, s-max-age=1800",
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
      <p>
        Cache-Control: public, max-age=3600, s-max-age=1800
        <br />
        クライアント側は現在の時刻が表示される。
        <br />
        サーバー側はキャッシュが返却され、10秒で失効する
      </p>
      <div>クライアント</div>
      <div>{clientDate}</div>
      <div>サーバー</div>
      <div>{serverDate}</div>
    </div>
  );
}
