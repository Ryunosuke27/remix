import { Link } from "@remix-run/react";

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-5">
      <div>Cache Control</div>
      <Link to={`/caches/s-max-age`}>s-max-age</Link>
      <Link to={`/caches/no-store`}>no-store</Link>
    </div>
  );
}
