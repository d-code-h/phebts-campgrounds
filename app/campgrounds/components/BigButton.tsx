import React from 'react';
import Link from 'next/link';

export default function BigButton({
  href,
  status,
  children,
}: {
  href: string;
  status: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      className={`ring-2 rounded-md px-3 py-2 mt-10 mb-2 text-xl w-max block  font-semibold tracking-wide hover:text-white hover:shadow-xl focus:outline-none  focus:text-white focus:shadow-xl ${
        status === 'campground'
          ? 'ring-purple-500 text-purple-500 hover:bg-purple-500 focus:bg-purple-500  mx-auto'
          : 'ml-auto ring-green-500 text-green-500 hover:bg-green-500 focus:bg-green-500'
      }`}
      href={href}
    >
      {children}
    </Link>
  );
}
