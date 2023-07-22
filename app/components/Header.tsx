import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
  return (
    <header className="flex justify-between items-center px-3 py-2 bg-slate-20 shadow-md shadow-purple-50">
      <h1 className="text-3xl font-bold text-purple-500">
        <Link href="/campgrounds">Phebts</Link>
      </h1>
      <Nav />
    </header>
  );
}
