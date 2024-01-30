import { Link } from "@remix-run/react";

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-5">
      <Link to={`/caches/public`}>public</Link>
      <Link to={`/caches/no-store`}>no-store</Link>
    </div>
  );
}