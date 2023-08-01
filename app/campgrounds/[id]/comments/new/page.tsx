import { redirect } from 'next/navigation';

import Heading from '@/app/campgrounds/components/Heading';
import Form from '../components/Form';
import FormButton from '@/app/campgrounds/components/FormButton';
import Field from '../components/Field';
import { findById } from '@/app/lib/db';
import { Campground } from '@/app/campgrounds/lib/types';

export default async function New({
  params: { id },
}: {
  params: { id: string };
}) {
  // DB filter
  const filter = { _id: 0, name: 1 };

  // Get campground
  const { name } = (await findById(id, filter)) as Campground;

  if (!name) {
    redirect(`/campgrounds/${id}`);
  }

  return (
    <div>
      <Heading>{name}</Heading>
      <Form>
        {/* Comment input field */}
        <Field />

        {/* Submit button */}
        <FormButton state="new" />
      </Form>
    </div>
  );
}
