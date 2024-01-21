import Link from "next/link";
import { FaBars, FaMagnifyingGlass } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="flex justify-between items-center pt-4 pb-1 max-lg:px-4">
      <nav className="flex items-center gap-4">
        <Link href="/" className="text-xl font-bold uppercase">
          exception
        </Link>
        <div className="flex max-md:hidden gap-2 pl-4 border-l">
          <Link href="/conspiracy" className="text-sm uppercase">
            Conspiracy
          </Link>
          <Link href="/conspiracy" className="text-sm uppercase">
            Mistery
          </Link>
          <Link href="/conspiracy" className="text-sm uppercase">
            History
          </Link>
        </div>
      </nav>
      <form action="" className="flex max-md:hidden items-center">
        <input
          type="text"
          className="outline-none text-sm py-1 px-2 font-light border border-slate-900 bg-slate-900"
          placeholder="search"
        />
        <button className="py-2 px-4 bg-slate-900/50 text-sm">
          <FaMagnifyingGlass />
        </button>
      </form>
      <button className="py-2 md:hidden px-4 bg-slate-900/50 text-sm">
        <FaBars />
      </button>
    </header>
  );
}
