import { useEffect } from "react";
import AccessoriesTypeList from "../../components/AccessoriesType/AccessoriesTypeList";
import Feature from "./Feature/Feature";
import Hero from "./Hero/Hero";
import Subscription from "./Subscription/Subscription";

function HomePage() {
  useEffect(() => {
    document.title = "PointVision";
  }, []);
  return (
    <>
      <Hero />
      <div className="p-6 lg:px-36">
        <h2 className="text-2xl font-bold mb-6">Accessories by Type</h2>
        <AccessoriesTypeList />
        <Feature />
      </div>
      <Subscription />
    </>
  );
}

export default HomePage;
