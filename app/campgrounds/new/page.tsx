import Heading from '@/app/campgrounds/components/Heading';
import Fields from '@/app/campgrounds/components/Fields';
import Form from '@/app/campgrounds/components/Form';

export default function New() {
  return (
    <div>
      <Heading>Add new campground</Heading>
      <Form state="new">
        <Fields />
      </Form>
    </div>
  );
}
