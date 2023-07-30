import { ActionMeta, MultiValue } from 'react-select';

type SelectValue = { label: string; value: string };

type HandleSelectChange = (
  option: MultiValue<SelectValue>,
  actionMeta: ActionMeta<SelectValue>
) => void;

interface Options {
  value: string;
  label: string;
}

interface Props {
  name: string;
  value?: string[];
  options: Options[];
  placeholder: string;
}

interface FieldType {
  id: string;
  label: string;
  type?: string;
  options?: Options[];
  placeholder: string;
}

interface Campground {
  [key: string]: any;
  name: string;
  location: string;
  image: string;
  creator: string;
  description: string;
  amenities: string[];
  facilities: string[];
  capacity: number;
  price: number;
  rating: number;
}

interface NewContext {
  selections: (
    option: MultiValue<SelectValue>,
    actionMeta: ActionMeta<SelectValue>
  ) => void;
}

export type {
  Options,
  Props,
  FieldType,
  Campground,
  NewContext,
  HandleSelectChange,
};
