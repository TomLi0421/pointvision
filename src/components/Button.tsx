import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className="bg-opacity-0 border border-solid border-white px-10 py-3.5 rounded hover:bg-white hover:text-black">
      {children}
    </button>
  );
}
