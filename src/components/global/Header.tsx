import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center pt-4 pb-1">
      <nav className="flex items-center gap-4">
        <Link href="/" className="text-lg font-bold uppercase">
          WorldSecret
        </Link>
        <Link href="/conspiracy" className="text-sm uppercase pl-4 border-l">
          Conspiracy
        </Link>
        <Link href="/conspiracy" className="text-sm uppercase">
          Mistery
        </Link>
        <Link href="/conspiracy" className="text-sm uppercase">
          History
        </Link>
      </nav>
      <form action=""></form>
    </header>
  );
}
