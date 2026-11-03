import "./reset.css";
import Header from "./components/home/Header";
import Footer from "./components/home/Footer";
import Routes from "./components/Routes";
import { useState } from "react";
import MyContext from "./ContextApp.jsx";

function App() {
  const [badgeValue, setBadgeValue] = useState(0);
  const [compras, setCompras] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  return (
    <>
      <MyContext.Provider
        value={{
          badgeValue,
          setBadgeValue,
          compras,
          setCompras,
          inputSearch,
          setInputSearch,
        }}
      >
        <Header />
        <Routes />
        <Footer />
      </MyContext.Provider>
    </>
  );
}

export default App;
