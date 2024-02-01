import { Link } from "@remix-run/react";

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-5">
      <h1 className="text-4xl font-bold">Play Ground</h1>

      <Link to={`/cache-control`}>Cache Control</Link>
    </div>
  );
}
