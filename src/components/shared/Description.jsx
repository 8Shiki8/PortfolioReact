
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import CardMedia from "@mui/material/CardMedia";
import { useState } from "react";
import Chip from "@mui/material/Chip";







Description.propTypes = {juego:PropTypes.object}

export default function Description({ juego }) {
    const [imagenAux] = useState(
        "https://i.postimg.cc/rsZJZRXd/Screenshot-7.jpg"
    );
     const renderCategorias = juego.categoria.map((categoria) => {
       return (
         <>
           <Chip label={categoria} />
         </>
       );
     });
  return (
    <>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        {juego.nombre}
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        {juego.descripcion}
      </Typography>

      <CardMedia
        component="img"
        alt={juego.nombre}
        image={juego.imagen}
        onError={(e) => (e.target.src = imagenAux)}
        sx={{
          height: 800,
          width: "100%",
          objectFit: "contain",
          overflowX: "hidden",
        }}
      />

      <Fab variant="extended">sinopsis</Fab>

      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni provident
        quod enim animi esse architecto dolor maiores libero tempore sunt?
        Repellat nam molestias non, obcaecati dolorum voluptate ducimus ipsa ea?
        Dolor maxime cupiditate magni veritatis explicabo excepturi, nisi
        nesciunt dolorum voluptate, obcaecati deserunt, assumenda odit.
        Reprehenderit corporis laudantium minima. Amet cumque modi iusto veniam
        accusamus dolor laborum ipsam. Minus, pariatur. Id mollitia modi vitae,
        quasi quae accusamus magnam, officiis excepturi nemo doloremque incidunt
        quaerat quis debitis voluptates est! Amet, sit libero? Unde quam
        praesentium eos enim rem quas deleniti dolorum.
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          color: "text.secondary",
          fontWeight: "bold",
          display: "inline !important",
        }}
      >
        Categoria:
        <span style={{ fontWeight: "bold", color: "green" }}>
          {renderCategorias}
        </span>
      </Typography>
      <br />
      <Typography
        variant="subtitle1"
        sx={{
          color: "text.secondary",
          fontWeight: "bold",
          display: "inline !important",
        }}
      >
        Precio:
        <span style={{ fontWeight: "bold", color: "green" }}>
          {" "}
          {juego.precio + "$"}
        </span>
      </Typography>
    </>
  );
}
