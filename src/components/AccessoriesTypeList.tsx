import AccessoriesCard from "./AccessoriesCard";

export default function AccessoriesTypeList() {
  return (
    <div className="p-6 lg:px-36">
      <h2 className="text-2xl font-bold mb-6">Accessories by Type</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <AccessoriesCard style={{ backgroundColor: "#132c34" }} />
        <AccessoriesCard style={{ backgroundColor: "#132c34" }} />
        <AccessoriesCard style={{ backgroundColor: "#132c34" }} />
        <AccessoriesCard style={{ backgroundColor: "#132c34" }} />
        <AccessoriesCard style={{ backgroundColor: "#132c34" }} />
        <AccessoriesCard style={{ backgroundColor: "#132c34" }} />
      </div>
    </div>
  );
}
