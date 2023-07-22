import Link from 'next/link';
import Nav from './Nav';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export default function Header() {
  const { getUser } = getKindeServerSession();
  const user = getUser();
  return (
    <header className="flex justify-between items-center px-3 py-2 bg-slate-20 shadow-md shadow-purple-50">
      <h1 className="text-3xl font-bold text-purple-500">
        <Link href="/campgrounds">Phebts</Link>
      </h1>
      {user && (
        <h2 className="font-mono font-semibold text-xl text-purple-500 animate-bounce tracking-widest">
          Welcome {user.given_name} 😊
        </h2>
      )}
      <Nav />
    </header>
  );
}
