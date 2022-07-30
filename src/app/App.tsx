import { FormG, InputG, TextareaG } from "golrang-design-system";
import * as yup from "yup";
type TFormProps = { name: string; user: string; age: number };
type TKeyOf = keyof TFormProps;

type TSchema<T> = {
  [P in keyof T]: any;
};

const schema = yup.object<TSchema<TFormProps>>({
  name: yup.string().required(),
  user: yup.string().required(),
  age: yup.number().required(),
});

export const App = () => {
  const onSubmit = (state: TFormProps) => console.log(state);
  return (
    <FormG<TFormProps>
      className="  max-w-md mx-auto py-32"
      {...{ onSubmit, schema }}
    >
      <InputG<TKeyOf> label="Name" name="name" />
      <InputG<TKeyOf> label="Age" name="age" />
      <TextareaG<TKeyOf> label="User" name="user" />
      <button type="submit">Submit</button>
    </FormG>
  );
};
