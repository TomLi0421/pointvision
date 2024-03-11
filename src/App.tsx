import "./App.css";
import AccessoriesTypeList from "./components/AccessoriesType/AccessoriesTypeList";
import Feature from "./components/Feature/Feature";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/Navbar/NavBar";
import Subscription from "./components/Subscription/Subscription";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <AccessoriesTypeList />
      <Feature />
      <Subscription />
      <Footer />
    </>
  );
}

export default App;
