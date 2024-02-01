import type { HeadersFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { CACHE_PATTERN } from "./cache-control._index";

/**
 * レスポンスヘッダーを設定する
 * @returns
 */
export const headers: HeadersFunction = ({ loaderHeaders }) => ({
  "Cache-Control": loaderHeaders.get("Cache-Control") || "",
});

/**
 * 画面読み込みの際のサーバーサイドの処理
 * @returns
 */
export const loader: LoaderFunction = async ({ params }) => {
  const serverDate = new Date().toUTCString();
  const cacheControlHeader =
    CACHE_PATTERN.find(({ id }) => params.cacheId === id)?.header || "";
  return json(
    { cacheId: params.cacheId, serverDate },
    { headers: { "Cache-Control": cacheControlHeader } },
  );
};

export default function Cache() {
  const { cacheId, serverDate } = useLoaderData<typeof loader>();
  const clientDate = new Date().toUTCString();
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-5">
      <Link to="/cache-control">← Back to Cache Control Selection</Link>
      <h1 className="text-4xl font-bold">{cacheId}</h1>
      <div>{clientDate}</div>
      <div>{serverDate}</div>
    </div>
  );
}
