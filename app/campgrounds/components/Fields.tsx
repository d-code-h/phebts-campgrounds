import fields from '../lib/fields';
import Field from './Field';

export default function Fields() {
  return (
    <>
      {fields.map((field) => (
        <Field key={field.id} field={field} />
      ))}
    </>
  );
}
