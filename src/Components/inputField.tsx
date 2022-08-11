import { Input } from "antd";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import React, { ReactNode } from "react";

interface Props {
  className: string;
  size: SizeType;
  placeholder: string;
  prefix: ReactNode;
  onChange(e: any): void;
}
const InputField: React.FC<Props> = ({
  className,
  size,
  placeholder,
  prefix,
  onChange,
}) => {
  return (
    <>
      <div className={className}>
        <Input
          data-testid="inputField"
          size={size}
          placeholder={placeholder}
          prefix={prefix}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default InputField;
