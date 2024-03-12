import AccessoriesTypeList from "../../components/AccessoriesType/AccessoriesTypeList";

function ProductPage() {
  return (
    <>
      <div className="p-6 lg:px-36">
        <h1 className="font-bold text-2xl text-center mb-14">Shop</h1>
        <AccessoriesTypeList />
      </div>
    </>
  );
}

export default ProductPage;
