import { Input } from "components/input/Input";
import React from "react";
import { useController } from "react-hook-form";

export const FormInput = ({ name }: any) => {
  const { field } = useController({ name });
  return <Input {...field} />;
};
