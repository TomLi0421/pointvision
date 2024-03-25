import { createContext, ReactNode, useState } from "react";

interface ShippingInfoProviderProps {
  children: ReactNode;
}

interface ShippingInfo {
  shippingInfo: any;
  updateShippingInfo: (data: any) => void;
}

export const ShippingInfoContext = createContext<ShippingInfo>({
  shippingInfo: {},
  updateShippingInfo: (data: any) => {},
});

export default function ShippingInfoProvider({
  children,
}: ShippingInfoProviderProps) {
  const [shippingInfo, setShippingInfo] = useState(
    JSON.parse(localStorage.getItem("shippingInfo") || "{}")
  );

  const updateShippingInfo = (data: any) => {
    setShippingInfo((prev: any) => data);
    localStorage.setItem("shippingInfo", JSON.stringify(data));
  };
  return (
    <ShippingInfoContext.Provider
      value={{
        shippingInfo: shippingInfo,
        updateShippingInfo: updateShippingInfo,
      }}
    >
      {children}
    </ShippingInfoContext.Provider>
  );
}
