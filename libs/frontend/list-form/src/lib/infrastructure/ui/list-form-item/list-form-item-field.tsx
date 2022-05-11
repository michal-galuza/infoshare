import { Field } from 'formik';
interface IListFormItemFieldProps {
  placeholder: string;
  name: string;
  type?: string;
  as?: string;
}

export const ListFormItemField = ({
  placeholder,
  name,
  type,
  as,
}: IListFormItemFieldProps): JSX.Element => (
  <Field
    name={name}
    placeholder={placeholder}
    as={as || 'input'}
    type={type || 'text'}
  />
);
