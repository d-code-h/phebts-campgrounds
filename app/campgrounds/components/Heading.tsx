import { ReactNode } from 'react';

export default function Heading({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-purple-500 font-bold text-3xl text-center mt-7 -mb-4 tracking-wider">
      {children}
    </h1>
  );
}
