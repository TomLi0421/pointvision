import styles from "./CheckoutInfoCard.module.css";

function CheckoutInfoCard(props: any) {
  return (
    <div className="mb-6">
      <h2 className="mb-4 font-medium text-base">{props.title}</h2>
      <div className={`${styles.checkout_info_card__bg_color} p-4 rounded-md `}>
        <h3 className="font-medium text-sm mb-2">
          {props.firstName} {props.lastName}
        </h3>
        <p className="font-normal text-sm">{props.email}</p>
        <p className="font-normal text-sm mb-2">{props.phone}</p>
        <p className="font-normal text-sm">{props.address}</p>
      </div>
    </div>
  );
}

export default CheckoutInfoCard;
