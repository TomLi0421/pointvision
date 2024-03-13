import { Breadcrumbs, Link, Typography } from "@mui/material";
import styles from "./styles.module.css";

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
      </div>
    </>
  );
}

export default ProductPage;
