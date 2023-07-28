import Label from './Label';
import SelectField from './SelectField';
import { FieldType, Options } from '../lib/types';

export default function Field({ field }: { field: FieldType }) {
  return (
    <div
      className={`${
        field.id !== 'amenities' &&
        field.id !== 'facilities' &&
        field.id !== 'desc' &&
        `flex justify-start gap-5 items-baseline text-lg ${
          field.id === 'price' && 'w-6/12 inline-flex'
        } ${field.id === 'rating' && 'inline-flex w-4/12 float-right'}`
      }`}
    >
      <Label id={field.id} label={field.label} />

      {field.id === 'amenities' || field.id === 'facilities' ? (
        <>
          <SelectField
            name={field.id}
            options={field.options as Options[]}
            placeholder={field.placeholder as string}
          />
        </>
      ) : field.id === 'desc' ? (
        <textarea
          className="w-full h-40 p-3 rounded-md text-slate-600 tracking-wider
              border border-purple-200 
              hover:border-purple-500
              caret-purple-800 
              focus:outline-none focus:border-none focus:ring-2 
              shadow-purple-300 focus:ring-purple-500 mb-3 focus:shadow-lg
              placeholder:text-sm 
              "
          name={field.id}
          id={field.id}
          placeholder={field.placeholder}
        ></textarea>
      ) : (
        <input
          className={`w-full rounded-md text-slate-600 tracking-wider
              border border-purple-200 caret-purple-800 hover:border-purple-500 focus:outline-none focus:border-none focus:ring-2 
              shadow-purple-300 focus:ring-purple-500 mb-3 focus:shadow-lg placeholder:text-sm`}
          id={field.id}
          type={field.type}
          placeholder={field.placeholder}
        />
      )}
    </div>
  );
}
