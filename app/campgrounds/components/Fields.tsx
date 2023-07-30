import fields from '../lib/fields';
import Field from './Field';
import { Campground } from '../lib/types';

export default function Fields({ campground }: { campground?: Campground }) {
  console.log('====================================');
  console.log(campground);
  console.log('====================================');
  return (
    <>
      {fields.map((field) => (
        <Field
          key={field.id}
          field={field}
          value={campground && campground[field.id]}
        />
      ))}
    </>
  );
}
