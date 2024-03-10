import { accessoriesTypeData } from "../../accessories_type_data";
import AccessoriesCard from "./AccessoriesTypeCard";

export default function AccessoriesTypeList() {
  return (
    <div className="p-6 lg:px-36">
      <h2 className="text-2xl font-bold mb-6">Accessories by Type</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {accessoriesTypeData.map((accessory: any, index: number) => (
          <AccessoriesCard
            key={index}
            typeName={accessory.typeName}
            img={accessory.img}
            cardColor={accessory.cardColor}
          />
        ))}
      </div>
    </div>
  );
}
