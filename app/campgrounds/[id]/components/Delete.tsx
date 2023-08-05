'use client';

import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Delete({
  id,
  commentId,
}: {
  id: string;
  commentId?: string;
}) {
  const { push } = useRouter();

  const handleClick = async () => {
    try {
      let res;
      if (commentId) {
        res = await axios.delete(`/campgrounds/${id}/comments/api`, {
          params: { commentId },
        });
      } else {
        res = await axios.delete(`/campgrounds/api`, {
          params: { id },
        });
      }

      if (res.status === 200) {
        push(`/campgrounds/${id}`);
      } else {
        console.log('Something went wrong');
      }
    } catch (error) {
      console.log('Something went wrong');
    }
  };

  return (
    <button
      className="ring-red-500 text-red-500 hover:bg-red-500 focus:bg-red-500 rounded-md px-2 py-1 font-semibold tracking-wide hover:text-white hover:shadow-xl focus:outline-none focus:text-white focus:shadow-xl"
      type="button"
      onClick={handleClick}
    >
      Delete
    </button>
  );
}
