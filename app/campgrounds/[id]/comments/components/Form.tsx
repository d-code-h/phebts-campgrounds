'use client';

import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function Form({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  const { push } = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      comment: e.target.comment.value.trim(),
      campgroundId: id,
    };

    try {
      const res = await axios.post(`/campgrounds/${id}/comments/api`, data);
      console.log(res);
      if (res.status === 200) {
        push(`/campgrounds/${id}`);
      }
    } catch (error) {
      console.log(error);
    }
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
