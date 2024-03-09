export default function AccessoriesCard(props: any, key: number) {
  return (
    <div
      key={key}
      className={`${props.cardColor} w-full h-72 text-white px-12 py-6 flex flex-col justify-between items-center 2xl:flex-row`}
    >
      <div>
        <h4 className="font-bold text-2xl mb-6">{props.typeName}</h4>
        <a href="#" className="hover:underline">
          <p>Expore Items</p>
        </a>
      </div>

      <img
        className="w-56 max-h-36 2xl:max-h-64 2xl:w-64 object-contain"
        src={props.img}
        alt={props.typeName}
      />
    </div>
  );
}
