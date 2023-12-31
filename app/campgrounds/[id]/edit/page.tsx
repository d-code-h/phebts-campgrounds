import { redirect } from 'next/navigation';
import Heading from '@/app/campgrounds/components/Heading';
import Fields from '@/app/campgrounds/components/Fields';
import Form from '@/app/campgrounds/components/Form';
import { findById } from '@/app/lib/db';

export default async function New({
  params: { id },
}: {
  params: { id: string };
}) {
  // Get campground
  const campground = await findById(id);

  if (!campground) {
    redirect(`/campgrounds/${id}`);
  }

  return (
    <div>
      <Heading>Edit {campground.name}</Heading>
      <Form state="edit" id={JSON.parse(JSON.stringify(campground._id))}>
        <Fields campground={campground} />
      </Form>
    </div>
  );
}
