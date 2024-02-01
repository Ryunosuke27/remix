import type { HeadersFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const headers: HeadersFunction = () => ({
  "Cache-Control": "public, max-age=2592000",
});

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-5">
      <h1 className="text-4xl font-bold">Play Ground</h1>

      <Link to={`/cache-control`}>Cache Control</Link>
    </div>
  );
}
