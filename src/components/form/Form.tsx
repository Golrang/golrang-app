import { forwardRef, useImperativeHandle } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const Provider = FormProvider as any;

export const Form = forwardRef(
  ({ onSubmit, defaultValues, children }: any, ref) => {
    const { control, reset, handleSubmit } = useForm({ defaultValues });
    useImperativeHandle(ref, () => ({ reset }));
    return (
      <Provider control={control}>
        <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
        <DevTool control={control} />
      </Provider>
    );
  }
);
