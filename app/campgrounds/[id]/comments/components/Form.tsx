'use client';

import { ReactNode } from 'react';

export default function Form({ children }: { children: ReactNode }) {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
  };

  return (
    <form
      className="max-w-md mx-auto mt-8 mb-7 ring-1 ring-purple-300 shadow-lg rounded-md p-5 bg-purple-50 hover:shadow-2xl hover:shadow-purple-200"
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
}
