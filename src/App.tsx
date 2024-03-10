import "./App.css";
import AccessoriesTypeList from "./components/AccessoriesType/AccessoriesTypeList";
import Feature from "./components/Feature/Feature";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/Navbar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <AccessoriesTypeList />
      <Feature />
    </>
  );
}

export default App;
