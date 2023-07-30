import { ReactNode } from 'react';
import Link from 'next/link';

export default function LinkBtn({
  children,
  href,
  status,
}: {
  children: ReactNode;
  href: string;
  status: string;
}) {
  return (
    <Link
      className={`ring-1 ${
        status === 'edit'
          ? 'ring-yellow-500 text-yellow-500 hover:bg-yellow-500 focus:bg-yellow-500'
          : 'ring-purple-500 text-purple-500 hover:bg-purple-500 focus:bg-purple-500'
      } rounded-md px-2 py-1 font-semibold tracking-wide hover:text-white hover:shadow-xl focus:outline-none focus:text-white focus:shadow-xl`}
      href={href}
    >
      {children}
    </Link>
  );
}
