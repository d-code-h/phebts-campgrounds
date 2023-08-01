'use client';

import { ReactNode, createContext } from 'react';
import { NewContext, HandleSelectChange } from '../lib/types';
import fields from '../lib/fields';
import axios from 'axios';

import { useRouter } from 'next/navigation';

export const SelectionContext = createContext<NewContext | null>(null);

export default function Form({
  state,
  id,
  children,
}: {
  state: string;
  id?: string;
  children: ReactNode;
}) {
  const { push } = useRouter();
  let selects: {
    [key: string]: any;
  } = {};

  const handleSelectChange: HandleSelectChange = (option, { name }) => {
    if (name !== undefined) {
      selects[name] = [...option];
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    let campground: { [key: string]: any } = {};

    fields.forEach(({ id }) => {
      if (id !== 'amenities' && id !== 'facilities') {
        campground[id] = e.target[id].value.trim();
      }
    });

    // Extract the value of amenities and facilities and update campground
    Object.keys(selects).forEach((select) => {
      campground[select] = selects[select].map(
        ({ value }: { value: string }) => value
      );
    });

    try {
      let status;
      let res;
      if (id) {
        // Update campground
        res = await axios.put(`/campgrounds/api`, campground, {
          params: { id: id },
        });
        status = res.status;
      } else {
        // Create new campground
        res = await axios.post(`/campgrounds/api`, campground);
        status = res.status;
      }

      if (status === 200) {
        return push(
          `${state === 'new' ? '/campgrounds' : `/campgrounds/${id}`}`
        );
      }
    } catch (error) {
      console.log('Something went wrong!');
    }
  };

  return (
    <form
      className="max-w-md mx-auto mt-8 mb-7 ring-1 ring-purple-300 shadow-lg rounded-md p-5 bg-purple-50  hover:shadow-2xl hover:shadow-purple-200"
      onSubmit={handleSubmit}
    >
      <SelectionContext.Provider
        value={{
          selections: handleSelectChange,
        }}
      >
        {children}
      </SelectionContext.Provider>

      <button
        className="ring-1 ring-purple-500 rounded-md px-2 py-1 text-xl text-purple-500 font-semibold tracking-wide hover:bg-purple-500 hover:text-white hover:shadow-xl focus:outline-none focus:bg-purple-500 focus:text-white focus:shadow-xl block mt-3 mx-auto"
        type="submit"
      >
        {state === 'new' ? 'Add' : 'Update'}
      </button>
    </form>
  );
}
