import { Breadcrumbs, Link, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import ProductCardList from "../../components/ProductCardList/ProductCardList";
import ProductProvider from "../../context/ProductContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function TypeOfProductPage() {
  const { type } = useParams<{ type: string }>();
  const splitItems = type!.replace(/([a-z])([A-Z])/g, "$1 $2");

  const navigate = useNavigate();

  useEffect(() => {
    document.title = `PointVision - ${splitItems}`;
    const types = [
      "VR Controller",
      "Comfort and Care",
      "Haptic Devices",
      "Cables, Chargers and Batteries",
      "Treadmills and Fitness",
      "Audio",
    ];

    if (!types.includes(splitItems)) {
      navigate("/NotFound");
    }
  }, []);

  return (
    <ProductProvider>
      <div className="p-6 lg:px-36 flex flex-col items-center mb-6 md:flex-row md:justify-between md:px-6">
        <h1 className="font-bold text-2xl text-center mb-14 md:mb-0">
          {`${splitItems} Accessories`}
        </h1>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Link underline="hover" color="inherit" href="/product">
            Product
          </Link>
          <Typography color="text.primary">{splitItems}</Typography>
        </Breadcrumbs>
      </div>
      <main className="p-6 lg:px-36 flex flex-col items-center">
        <ProductCardList type={type} />
      </main>
    </ProductProvider>
  );
}

export default TypeOfProductPage;
