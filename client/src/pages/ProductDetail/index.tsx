import { Breadcrumbs, Link, Typography } from "@mui/material";
import styles from "./styles.module.css";
import { useParams } from "react-router-dom";
import CustomCarousel from "../../components/ui/CustomCarousel";
import { useContext, useEffect } from "react";
import ProductDescription from "../../components/ProductDesciption/ProductDescription";
import CustomAccordion from "../../components/ui/CustomAccordion";
import { ProductContext } from "../../context/ProductContext";
import Divider from "@mui/material/Divider";

function ProductDetailPage() {
  const { productName } = useParams<{ productName: string }>();
  const formattedProductName = productName!.replace(/_/g, " ");

  const { product, isDataLoaded, getProductByName } =
    useContext(ProductContext);

  useEffect(() => {
    getProductByName(formattedProductName);
  }, []);

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
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
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
        </div>
      </div>
      <div className="p-6 lg:px-36">
        {isDataLoaded && (
          <>
            {product.compatible && (
              <>
                <CustomAccordion
                  title="Compatible with"
                  description={product.compatible}
                />
              </>
            )}
            {product.weight && (
              <>
                <CustomAccordion title="Weight" description={product.weight} />
              </>
            )}
            {product.color && (
              <>
                <CustomAccordion title="Color" description={product.color} />
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default ProductDetailPage;
