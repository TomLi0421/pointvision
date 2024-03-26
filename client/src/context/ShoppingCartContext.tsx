import { ReactNode, createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ShoppingCartProviderProps {
  children: ReactNode;
}

export const ShoppingCartContext = createContext({
  shoppingCartQty: 0,
  shoppingCartProduct: [],
  handleUpdateShoppingCart: (product: {
    name: string;
    imgName: string;
    brand: string;
    type: string;
    qty: number;
    price: number;
  }) => {},
  removeProduct: (product: { name: string; qty: number }) => {},
  storeProductQty: (productName: String, action: String) => {},
  totalPrice: 0,
  calculateTotalPrice: () => {},
  resetShoppingCart: () => {},
});

export default function ShoppingCartProvider({
  children,
}: ShoppingCartProviderProps) {
  const [shoppingCartQty, setShoppingCartQty] = useState(
    Number(localStorage.getItem("shoppingCartQty")) || 0
  );

  const [shoppingCartProduct, setShoppingCartProduct] = useState(
    JSON.parse(localStorage.getItem("shoppingCartProducts") || "[]")
  );

  const [totalPrice, setTotalPrice] = useState(0);

  // on product detail page, when user clicks on "Add to cart" button
  const handleUpdateShoppingCart = (product: {
    name: string;
    imgName: string;
    brand: string;
    type: string;
    qty: number;
    price: number;
  }) => {
    toast.success("Added to cart", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    updateShoppingCartQty(product.qty);
    updateShoppingCartProduct(product);
  };

  // on product detail page, when select 5 in the quantity of the product, the shopping cart quantity should be updated to 5
  const updateShoppingCartQty = (qty: number) => {
    setShoppingCartQty((prev) => {
      localStorage.setItem("shoppingCartQty", String(prev + qty));
      return prev + qty;
    });
  };

  // on product detail page, store the product on local storage
  const updateShoppingCartProduct = (product: {
    name: string;
    imgName: string;
    brand: string;
    type: string;
    qty: number;
    price: number;
  }) => {
    setShoppingCartProduct((prev: any[]) => {
      const existingProductIndex = prev.findIndex(
        (p) => p.name === product.name
      );

      if (existingProductIndex !== -1) {
        // The product already exists in the cart
        const newCart = [...prev];
        newCart[existingProductIndex].qty += product.qty;
        localStorage.setItem("shoppingCartProducts", JSON.stringify(newCart));
        return newCart;
      } else {
        // The product doesn't exist in the cart
        const newCart = [...prev, product];
        localStorage.setItem("shoppingCartProducts", JSON.stringify(newCart));
        return newCart;
      }
    });
  };

  // on shopping cart page, when user clicks on "Remove" icon
  const removeProduct = (product: { name: string; qty: number }) => {
    setShoppingCartProduct((prev: any[]) => {
      const existingProduct = [...prev];
      const removedProduct = existingProduct.filter(
        (p: any) => p.name !== product.name
      );

      localStorage.setItem(
        "shoppingCartProducts",
        JSON.stringify(removedProduct)
      );

      setShoppingCartQty((prev) => {
        localStorage.setItem("shoppingCartQty", String(prev - product.qty));

        return prev - product.qty;
      });

      return removedProduct;
    });
  };

  // on shopping cart page, store the quantity of the product in the shopping cart
  const storeProductQty = (productName: String, action: String) => {
    setShoppingCartProduct((prev: any[]) => {
      // the index of the product need to be updated
      const existingProduct = [...prev];
      const productIndex = prev.findIndex((p) => p.name === productName);
      if (action === "add") {
        existingProduct[productIndex].qty += 1;

        // update the shopping cart quantity
        setShoppingCartQty((prev) => {
          localStorage.setItem("shoppingCartQty", String(prev + 1));
          return prev + 1;
        });

        // update the shopping cart product in local storage
        localStorage.setItem(
          "shoppingCartProducts",
          JSON.stringify(existingProduct)
        );

        calculateTotalPrice();
        return existingProduct;
      } else {
        existingProduct[productIndex].qty -= 1;

        // update the shopping cart quantity
        setShoppingCartQty((prev) => {
          localStorage.setItem("shoppingCartQty", String(prev - 1));
          return prev - 1;
        });

        // update the shopping cart product in local storage
        localStorage.setItem(
          "shoppingCartProducts",
          JSON.stringify(existingProduct)
        );

        calculateTotalPrice();
        return existingProduct;
      }
    });
  };

  // on shopping cart page, calculate the total price of all products in the shopping cart
  const calculateTotalPrice = () => {
    setTotalPrice((prev: any) => {
      const total = shoppingCartProduct.reduce(
        (acc: any, product: any) => {
          return acc + product.price * product.qty;
        },
        shoppingCartQty > 0 ? 10 : 0
      );

      return total.toFixed(2);
    });
  };

  // on checkout_success page, reset the shopping cart
  const resetShoppingCart = () => {
    setShoppingCartQty(0);
    setShoppingCartProduct([]);
    localStorage.setItem("shoppingCartQty", "0");
    localStorage.setItem("shoppingCartProducts", "[]");
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCartQty: shoppingCartQty,
        shoppingCartProduct: shoppingCartProduct,
        handleUpdateShoppingCart: handleUpdateShoppingCart,
        removeProduct: removeProduct,
        storeProductQty: storeProductQty,
        totalPrice: totalPrice,
        calculateTotalPrice: calculateTotalPrice,
        resetShoppingCart: resetShoppingCart,
      }}
    >
      {children}
      <ToastContainer />
    </ShoppingCartContext.Provider>
  );
}
