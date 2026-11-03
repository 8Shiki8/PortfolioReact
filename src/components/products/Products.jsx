import { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import { GetAllJuegos } from "../service/StoreService";
import CardProduct from "./CardProduct";
import MySpinner from "./../shared/MySpinner";
import MyContext from "../../ContextApp";

export default function Products() {
  const [juegos, setJuegos] = useState([]);
  const [error, setError] = useState(false);
  const [listaSearch, setListaSearch] = useState([]);
  const [loading, setLoading] = useState(true); // Nuevo estado para manejar la carga
  const { inputSearch, setInputSearch } = useContext(MyContext);

  useEffect(() => {
    fetchGames();
  }, []); // Sin dependencias para que solo se ejecute una vez
  useEffect(() => {
    let filtered = [];

    setInputSearch(inputSearch);
    filtered = juegos.filter((juego) =>
      juego.nombre.toLowerCase().includes(inputSearch.toLowerCase())
    );
    setListaSearch(filtered);

    console.log(filtered);
    console.log(listaSearch);
  }, [inputSearch, juegos]);

  const fetchGames = async () => {
    try {
      const response = await GetAllJuegos();
      setJuegos(response);

      // Lanzar un error para probar el manejo de errores
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false); // Detener la carga, independientemente de si hay error o no
    }
  };

  const renderJuegos = juegos.map((juego) => {
    if (
      inputSearch !== "" &&
      juego.nombre.toLowerCase().includes(inputSearch.toLowerCase())
    ) {
      return <CardProduct key={juego.id} juego={juego} />;
    }

    if (inputSearch.trim() === "") {
      return <CardProduct key={juego.id} juego={juego} />;
    } // Agrega una key única
  });

  if (loading) {
    return <MySpinner />; // Mostrar spinner mientras se carga
  }
  if (listaSearch.length === 0 && inputSearch !== "") {
    return (
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        No se encontro nada con {inputSearch}
      </Box>
    );
  }

  if (error) {
    return <Box>OOOOPS!!! Hubo un error.</Box>; // Mostrar mensaje de error
  }

  return (
    <Box
      sx={{
        width: "95%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        gap: "20px",
        margin: "20px auto",
      }}
    >
      {renderJuegos}
    </Box>
  );
}
