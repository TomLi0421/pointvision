function InputBoxWithLabel(props: any) {
  return (
    <div {...props}>
      <label className="block mb-3" htmlFor={props.id}>
        {props.labeltext}
      </label>
      <input
        className="border-b-indigo-900 border-b-2 w-full outline-none py-3"
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default InputBoxWithLabel;
