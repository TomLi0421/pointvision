import ProductCard from "./ProductCard/ProductCard";

function ProductCardList() {
  return (
    <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}

export default ProductCardList;
