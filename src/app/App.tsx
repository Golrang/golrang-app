import { CheckBox, Form, Input, Select, TextArea } from "golrang-design-system";
import * as yup from "yup";

type TFormProps = {
  name: string;
  user: string;
  age: number;
  isHired: boolean;
  company: number;
};
type TKeyOf = keyof TFormProps;

type TSchema<T> = {
  [P in keyof T]: any;
};

const schema = yup.object<TSchema<TFormProps>>({
  name: yup.string().required(),
  user: yup.string().required(),
  age: yup.number().required(),
  isHired: yup.boolean().required(),
  company: yup.number().required(),
});

export const App = () => {
  const onSubmit = (state: TFormProps) => console.log(state);
  return (
    <Form<TFormProps>
      className="  max-w-md mx-auto py-32"
      {...{ onSubmit, schema }}
    >
      <Input<TKeyOf> label="Name" name="name" />
      <Input<TKeyOf> label="Age" name="age" />
      <TextArea<TKeyOf> label="User" name="user" />
      <CheckBox<TKeyOf> label="Is Hired" name="isHired" />
      <Select
        label="Company"
        name="company"
        options={[{ label: "One", value: "1" }]}
      />
      <button type="submit">Submit</button>
    </Form>
  );
};
