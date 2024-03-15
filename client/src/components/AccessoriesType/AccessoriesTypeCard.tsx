import { Link } from "react-router-dom";

export default function AccessoriesCard(props: any, key: number) {
  return (
    <div
      key={key}
      className={`${props.cardColor} ${props.className} h-80 px-12 py-6 flex flex-col justify-between 2xl:items-center 2xl:flex-row`}
    >
      <div>
        <h4 className="font-bold text-2xl mb-6 text-white">{props.typeName}</h4>
        <Link to="#" className="hover:underline text-white">
          <p className="text-white">Expore Items</p>
        </Link>
      </div>

      <img
        className="w-36 h-36 2xl:w-56 2xl:h-56 object-contain"
        src={props.img}
        alt={props.typeName}
      />
    </div>
  );
}
