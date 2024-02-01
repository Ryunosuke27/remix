import type { HeadersFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData, useParams } from "@remix-run/react";
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
    { serverDate, cacheControlHeader },
    { headers: { "Cache-Control": cacheControlHeader } },
  );
};

export default function PlayCacheControl() {
  const { serverDate, cacheControlHeader } = useLoaderData<typeof loader>();
  const clientDate = new Date().toUTCString();
  const params = useParams();

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-5">
      <Link to="/cache-control">← Go Back</Link>
      <h1 className="text-4xl font-bold">{params.cacheId}</h1>
      <div>{cacheControlHeader}</div>
      <button
        className="rounded border px-2 py-1 shadow"
        onClick={() => location.reload()}
      >
        Reload Page
      </button>

      <div>
        <span className="mr-2 text-indigo-600">CSR</span>
        {clientDate}
      </div>
      <div>
        <span className="mr-2 text-indigo-600">SSR</span>
        {serverDate}
      </div>
    </div>
  );
}
