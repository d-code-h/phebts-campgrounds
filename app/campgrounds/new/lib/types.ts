interface Options {
  value: string;
  label: string;
}

interface Props {
  name: string;
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

interface Data {
  name: string;
  location: string;
  image: string;
  description: string;
  amenities: string[];
  facilities: string[];
  capacity: string;
  price: string;
  rating: string;
}

export type { Options, Props, FieldType, Data };
