import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-zinc-800 text-zinc-100 min-h-screen">
      <div className="p-4 text-lg font-bold">InsightFlow</div>
      <nav className="flex flex-col space-y-2 p-4">
        <Link href="/dashboard" className="hover:text-white">
          Dashboard
        </Link>
        <Link href="/analytics" className="hover:text-white">
          Analytics
        </Link>
        <Link href="/projects" className="hover:text-white">
          Projects
        </Link>
        <Link href="/settings" className="hover:text-white">
          Settings
        </Link>
      </nav>
    </aside>
  );
}
