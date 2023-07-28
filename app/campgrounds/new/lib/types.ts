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

export type { Options, Props, FieldType };
