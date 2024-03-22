import ShoppingCartItemDetail from "./ShoppingItemDetail/ShoppingCartItemDetail";

function ShoppingCartItem(props: any) {
  return (
    <div className="flex rounded shadow-md py-2.5 pl-2.5 pr-6 mb-6 md:flex h-full items-center">
      <img
        className="w-[4.75rem] h-[4.75rem] rounded lg:w-20 lg:h-20"
        src={`https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-james-wheeler-414612.jpg&fm=jpg`}
        alt={props.name}
      />
      <ShoppingCartItemDetail />
    </div>
  );
}

export default ShoppingCartItem;
