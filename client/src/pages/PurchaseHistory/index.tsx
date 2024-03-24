import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function PurchaseHistoryPage() {
  const location = useLocation();

  useEffect(() => {
    document.title = "PointVision - Purchase History";
  }, []);

  return (
    <>
      <h1>Hello {} and welcome</h1>
    </>
  );
}

export default PurchaseHistoryPage;
