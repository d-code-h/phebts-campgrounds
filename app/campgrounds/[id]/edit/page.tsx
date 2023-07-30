import Heading from '@/app/campgrounds/components/Heading';
import Fields from '@/app/campgrounds/components/Fields';
import Form from '@/app/campgrounds/components/Form';

export default function New({ params: { id } }: { params: { id: string } }) {
  return (
    <div>
      <Heading>Edit</Heading>
      <Form state="edit">
        <Fields />
      </Form>
    </div>
  );
}
