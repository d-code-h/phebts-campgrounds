import { ReactNode } from 'react';
import Link from 'next/link';

export default function LinkBtn({
  children,
  href,
}: {
  children: ReactNode;
  href: URL;
}) {
  return (
    <Link
      className="ring-2 ring-purple-500 rounded-md px-3 py-2 block mt-5 text-xl text-purple-500 w-max mx-auto font-semibold tracking-wide hover:bg-purple-500 hover:text-white hover:shadow-xl focus:outline-none focus:bg-purple-500 focus:text-white focus:shadow-xl"
      href={href}
    >
      {children}
    </Link>
  );
}
