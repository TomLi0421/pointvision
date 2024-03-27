import { Breadcrumbs, Link, Typography } from "@mui/material";
import styles from "./styles.module.css";
import Box from "@mui/joy/Box";
import { accessoriesTypeData } from "../../data/accessories_type_data";
import ProductCardList from "../../components/ProductCardList/ProductCardList";
import AccessoriesCard from "../../components/AccessoriesType/AccessoriesTypeCard";
import ProductProvider from "../../context/ProductContext";
import { useEffect } from "react";

function ProductPage() {
  useEffect(() => {
    document.title = "PointVision - Product";
  }, []);

  return (
    <ProductProvider>
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
            py: 3,
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
              type={accessory.type}
            />
          ))}
        </Box>
      </div>
      <main className="p-6 lg:px-36 flex flex-col items-center">
        <ProductCardList />
      </main>
    </ProductProvider>
  );
}

export default ProductPage;
