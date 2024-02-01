import { Link } from "@remix-run/react";

const CACHE_PATTERN = [
  {
    id: "public",
    header: "public, max-age=60, s-max-age=30",
  },
  {
    id: "private",
    header: "private, max-age=60",
  },
  {
    id: "no-store",
    header: "no-store",
  },
  {
    id: "stale-while-revalidate",
    header: "max-age=0, s-maxage=30, stale-while-revalidate=30",
  },
];

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-5">
      <Link to="/">← Back to Play Ground Selection</Link>
      <h1 className="text-4xl font-bold">Cache Control</h1>
      {CACHE_PATTERN.map(({ id }) => (
        <Link key={id} to={`/cache-control/${id}`}>
          {id}
        </Link>
      ))}
    </div>
  );
}
