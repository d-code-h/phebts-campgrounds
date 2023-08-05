import { redirect } from 'next/navigation';

import Heading from '@/app/campgrounds/components/Heading';
import Form from '../../components/Form';
import FormButton from '@/app/campgrounds/components/FormButton';
import Field from '../../components/Field';
import { findById } from '@/app/lib/db';
import { findById as commentById } from '../../lib/db';
import { Campground } from '@/app/campgrounds/lib/types';
import { Comment } from '../../lib/types';

export default async function Edit({
  params: { id, commentId },
}: {
  params: { id: string; commentId: string };
}) {
  // DB filter
  const camFilter = { _id: 0, name: 1 };

  // Get campground
  const { name } = (await findById(id, camFilter)) as Campground;

  if (!name) {
    redirect(`/campgrounds/${id}`);
  }

  const comFilter = { _id: 0, text: 1 };
  const { text } = (await commentById(commentId, comFilter)) as Comment;

  if (!text) {
    redirect(`/campgrounds/${id}`);
  }

  return (
    <div>
      <Heading>{name}</Heading>
      <Form id={id}>
        {/* Comment input field */}
        <Field value={text} />

        {/* Submit button */}
        <FormButton state="edit" />
      </Form>
    </div>
  );
}
