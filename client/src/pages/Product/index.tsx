import { Breadcrumbs, Link, Typography } from "@mui/material";
import styles from "./styles.module.css";
import Box from "@mui/joy/Box";
import { accessoriesTypeData } from "../../data/accessories_type_data";
import ProductCardList from "../../components/ProductCardList/ProductCardList";
import AccessoriesCard from "../../components/AccessoriesType/AccessoriesTypeCard";

function ProductPage() {
  return (
    <>
      <div className={`${styles.product__type__bg_color} p-6 lg:px-36`}>
        <div className="flex flex-col items-center mb-6 md:flex-row md:justify-between md:px-6">
          <h1 className="font-bold text-2xl text-center mb-14 md:mb-0">
            Product
          </h1>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Typography color="text.primary">Product</Typography>
          </Breadcrumbs>
        </div>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            py: 1,
            overflow: "auto",
            width: "100%",
            scrollSnapType: "x mandatory",
            "& > *": {
              scrollSnapAlign: "center",
            },
            "::-webkit-scrollbar": { display: "none" },
          }}
        >
          {accessoriesTypeData.map((accessory: any, index: number) => (
            <AccessoriesCard
              key={index}
              typeName={accessory.typeName}
              img={accessory.img}
              cardColor={accessory.cardColor}
              className="2xl:flex-col 2xl:w-80"
            />
          ))}
        </Box>
      </div>
      <main className="p-6 lg:px-36 flex flex-col items-center">
        <p
          className={`${styles.product__number_result_color} text-center font-bold mb-6`}
        >
          Showing all 12 results
        </p>
        <select
          className={`${styles.product__filter__bg_color} ${styles.product__filter_text_color} mb-24 border p-3 pl-5 border-r-[1.3rem] outline-none`}
        >
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
        <ProductCardList />
      </main>
    </>
  );
}

export default ProductPage;
