'use client';

import { useContext, Context, FC } from 'react';
import { SelectionContext } from './Form';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Props, NewContext } from '../lib/types';

const animatedComponents = makeAnimated();

const SelectField: FC<Props> = ({ name, options, placeholder }) => {
  const { selections } = useContext(SelectionContext as Context<NewContext>);

  return (
    <>
      <Select
        isMulti
        components={animatedComponents}
        closeMenuOnSelect={false}
        classNamePrefix="select"
        isClearable={true}
        isSearchable={true}
        name={name}
        options={options}
        placeholder={placeholder}
        onChange={selections}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: 'rgb(168, 85, 247)',
            primary25: 'rgb(233, 213, 255)',
          },
        })}
        className="border rounded-md border-purple-200 caret-purple-800 
         hover:border-purple-500 
         focus:outline-none
 basic-multi-select"
      />
    </>
  );
};

export default SelectField;
