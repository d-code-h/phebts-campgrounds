'use client';

import { ReactNode, useState, createContext } from 'react';
import fields from '../lib/fields';
import axios from 'axios';

export const SelectionContext = createContext({});

export default function Form({ children }: { children: ReactNode }) {
  const [amenities, setAmenities] = useState([]);
  const [facilities, setFacilities] = useState([]);

  return (
    <form className="max-w-md mx-auto mt-8 mb-7 ring-1 ring-purple-300 shadow-lg rounded-md p-5 bg-purple-50  hover:shadow-2xl hover:shadow-purple-200">
      <SelectionContext.Provider
        value={{
          setAmenities: setAmenities,
          setFacilities: setFacilities,
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
