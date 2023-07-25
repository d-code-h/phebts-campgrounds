import { ReactNode } from 'react';

export default function Wrapper({ children }: { children: ReactNode }) {
  return (
    <section className="max-w-5xl mx-auto my-0 sm:my-10 p-5 bg-purple-50 rounded-md text-center">
      {children}
    </section>
  );
}
