import { Breadcrumbs, Link, Typography } from "@mui/material";
import styles from "./styles.module.css";
import { useParams } from "react-router-dom";
import CustomCarousel from "../../components/ui/CustomCarousel";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductDescription from "../../components/ProductDesciption/ProductDescription";

function ProductDetailPage() {
  const { productName } = useParams<{ productName: string }>();
  const formattedProductName = productName!.replace(/_/g, " ");

  const [product, setProduct] = useState<any>({});
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const response = await axios.get(
      `http://localhost:3000/api/get-product/${formattedProductName}`
    );

    setProduct(response.data);
    setIsDataLoaded(true);
  };

  return (
    <>
      <div className={`${styles.product_detail__type__bg_color} p-6 lg:px-36`}>
        <div className="flex flex-col items-center mb-6 md:flex-row md:justify-between md:px-6">
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Home
            </Link>
            <Link underline="hover" color="inherit" href="/product">
              Product
            </Link>
            <Typography color="text.primary">{formattedProductName}</Typography>
          </Breadcrumbs>
        </div>
        <main className="lg:grid lg:grid-cols-2 lg:gap-8">
          {isDataLoaded && (
            <CustomCarousel
              images={product.imgName}
              type={product.type}
              name={product.name}
            />
          )}
          <ProductDescription
            name={product.name}
            type={product.type}
            brand={product.brand}
            price={product.price}
            description={product.description}
            imgName={product.imgName}
          />
        </main>
      </div>
    </>
  );
}

export default ProductDetailPage;
