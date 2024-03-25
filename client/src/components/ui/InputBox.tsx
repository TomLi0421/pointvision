import { forwardRef } from "react";

const InputBox = forwardRef((props: any, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      required
    />
  );
});

export default InputBox;
