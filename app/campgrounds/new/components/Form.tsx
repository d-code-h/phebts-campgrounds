'use client';

import { ReactNode, createContext } from 'react';
import { NewContext, HandleSelectChange, Data } from '../lib/types';
import fields from '../lib/fields';
import axios from 'axios';

export const SelectionContext = createContext<NewContext | null>(null);

export default function Form({ children }: { children: ReactNode }) {
  let selects: {
    [key: string]: any;
  } = {};

  const handleSelectChange: HandleSelectChange = (option, { name }) => {
    if (name !== undefined) {
      selects[name] = [...option];
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    let data: { [key: string]: any } = {};

    fields.forEach(({ id }) => {
      if (id !== 'amenities' && id !== 'facilities') {
        data[id] = e.target[id].value.trim();
      }
    });

    // Extract the value of amenities and facilities and update data
    Object.keys(selects).forEach((select) => {
      data[select] = selects[select].map(
        ({ value }: { value: string }) => value
      );
    });

    console.log(data);
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
        Add
      </button>
    </form>
  );
}
