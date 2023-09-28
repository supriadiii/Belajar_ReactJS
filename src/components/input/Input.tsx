import React, { FC, InputHTMLAttributes } from "react";
import { type } from "os";

type typeInput = "text" | "number" | "password";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  value?: string | number;
  type?: typeInput;
}
const Input: FC<Props> = ({ placeholder, value, type, ...props }) => {
  return (
    <div>
      <input placeholder={placeholder} type={type} value={value} {...props} />
    </div>
  );
};

Input.defaultProps = {
  placeholder: "Masukan Data",
  type: "text",
};
export default Input;
