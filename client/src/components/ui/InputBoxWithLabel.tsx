import { forwardRef } from "react";

const InputBoxWithLabel = forwardRef((props: any, ref: any) => {
  return (
    <div {...props}>
      <label className="block mb-3" htmlFor={props.id}>
        {props.labeltext}
      </label>
      <input
        ref={ref}
        className="focus:border-b-indigo-900 border-b-2 w-full outline-none py-3"
        type={props.type}
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        required
      />
    </div>
  );
});

export default InputBoxWithLabel;
