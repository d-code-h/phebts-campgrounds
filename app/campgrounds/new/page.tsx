import Heading from '../components/Heading';
import Fields from './components/Fields';
import Form from './components/Form';

export default function New() {
  return (
    <div>
      <Heading>Add new campground</Heading>
      <Form>
        <Fields />
      </Form>
    </div>
  );
}
