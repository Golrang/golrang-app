import { FormInput } from "components/form-input/FormInput";
import { Form } from "components/form/Form";
import { useRef, useState } from "react";
import { v4 as uuid } from "uuid";

const FromGhaza = ({ defaultValues, setcurrent }: any) => {
  const reset = () => {
    ref?.current?.reset?.();
    setcurrent("");
  };
  const ref = useRef(null as any);
  return (
    <Form
      ref={ref}
      onSubmit={(state: any) => reset()}
      defaultValues={defaultValues}
    >
      <FormInput name="test" />
      <button>Submit</button>
      <button type="button" onClick={() => reset()}>
        Reset
      </button>
    </Form>
  );
};

export const App = () => {
  const [current, setcurrent] = useState("");

  return (
    <div>
      {current ? (
        <FromGhaza
          key={current}
          defaultValues={{ test: current }}
          setcurrent={setcurrent}
        />
      ) : (
        <FromGhaza key="add" setcurrent={setcurrent} />
      )}

      <button type="button" onClick={() => setcurrent(uuid())}>
        edit
      </button>
    </div>
  );
};
