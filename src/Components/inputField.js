import { Input } from "antd";
import React from "react";

function InputField(props) {
  return (
    <>
      <div className={props.className}>
        <Input
          size={props.size}
          placeholder={props.placeholder}
          prefix={props.prefix}
          onChange={props.onTyping}
        />
      </div>
    </>
  );
}

export default InputField;
