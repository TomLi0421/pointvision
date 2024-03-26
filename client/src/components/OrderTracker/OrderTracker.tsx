import { useContext } from "react";
import HorizontalLinearAlternativeLabelStepper from "../ui/HorizontalLinearAlternativeLabelStepper";
import { OrderContext } from "../../context/OrderContext";
import ShippingCardList from "../ShippingCardList/ShippingCardList";

function OrderTracker() {
  const { order } = useContext(OrderContext);
  return (
    <>
      {order && (
        <>
          <div className="px-12 text-center mb-7">
            <h3 className="text-3xl font-semibold mb-6">
              Order details #{order.id}
            </h3>
            <p className="font-medium text-sm mb-6">
              Time placed: {new Date(order.createdAt).toLocaleString()}
            </p>
          </div>
          <HorizontalLinearAlternativeLabelStepper status={order.status} />
          <div className="px-6 mt-20">
            <ShippingCardList
              purchasedItems={order.items}
              purchasedItemsAmount={order.amount}
            />
          </div>
        </>
      )}
    </>
  );
}

export default OrderTracker;
