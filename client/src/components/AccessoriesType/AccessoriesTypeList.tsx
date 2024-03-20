import { accessoriesTypeData } from "../../data/accessories_type_data";
import AccessoriesCard from "./AccessoriesTypeCard";

export default function AccessoriesTypeList(props: any) {
  return (
    <>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${props.className}`}
      >
        {accessoriesTypeData.map((accessory: any, index: number) => (
          <AccessoriesCard
            key={index}
            typeName={accessory.typeName}
            img={accessory.img}
            cardColor={accessory.cardColor}
            type={accessory.type}
          />
        ))}
      </div>
    </>
  );
}
