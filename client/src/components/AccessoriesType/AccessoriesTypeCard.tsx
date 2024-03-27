import { Link } from "react-router-dom";

export default function AccessoriesCard(props: any, key: number) {
  return (
    <Link to={`/product/${props.type}`}>
      <div
        key={key}
        className={`${props.cardColor} ${props.className} min-w-64 h-80 px-12 py-6 rounded-md flex flex-col justify-between transition ease-in-out hover:-translate-y-1 hover:scale-110 2xl:items-center 2xl:flex-row`}
      >
        <div>
          <h4 className="font-bold text-2xl mb-6 text-white">
            {props.typeName}
          </h4>

          <p className="text-white">Expore Items</p>
        </div>

        <img
          className="w-36 h-36 2xl:w-44 2xl:h-44 object-contain"
          src={props.img}
          alt={props.typeName}
        />
      </div>
    </Link>
  );
}
