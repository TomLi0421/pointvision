export default function InputBox(props: any) {
  return (
    <input
      {...props}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      required
    />
  );
}
