import { PropTypes } from "prop-types";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MyModal from "../shared/MyModal";
import Description from "../shared/Description";
import { useContext } from "react";
import MyContext from "../../ContextApp";
import { Compra } from "../../models/MyModels";
import { badgeSetter } from "../../scripts/ScriptStore";
import MySnackbar from "../shared/MySnackbar";

CardProduct.propTypes = {
  juego: PropTypes.object,
};

export default function CardProduct({ juego }) {
  const { setBadgeValue, setCompras, compras } = useContext(MyContext);

  let {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const [imagenAux] = useState(
    "https://i.postimg.cc/rsZJZRXd/Screenshot-7.jpg"
  );
  const [openSnack, setOpenSnack] = useState(false);
  const onSubmit = (e) => {
    const compra = new Compra(juego.nombre, juego.precio, e.cantidad, juego.id);
    const listaCompra = [...compras, compra];
    badgeSetter(listaCompra, setBadgeValue);
    setCompras(listaCompra);
    console.log(compras);
    reset();
    setValue("cantidad", "");
    setOpenSnack(true);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <form
        key={juego.id}
        onSubmit={handleSubmit(onSubmit)}
        style={{ maxHeight: 1500 }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt={juego.nombre}
            image={juego.imagen}
            onError={(e) => (e.target.src = imagenAux)}
            sx={{
              height: 435,
              objectFit: "cover",
              overflowX: "hidden",
            }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {juego.nombre}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  color: "text.secondary",
                  fontWeight: "bold",
                  display: "inline !important",
                }}
              >
                Cantidad
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <TextField
                {...register("cantidad", { required: true })}
                id="outlined-number"
                label="Number"
                type="number"
                error={!!errors["cantidad"]}
                helperText={errors["cantidad"] && "this field is required"}
                slotProps={{
                  inputLabel: {
                    shrink: true,
                  },
                }}
                inputProps={{
                  min: 1,
                  step: 1,
                  style: { textAlign: "center" },
                }}
                sx={{ width: "60%" }}
              />
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
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
            </Box>
          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              size="small"
              variant="contained"
              type="submit"
              disabled={errors["cantidad"] || !watch("cantidad")}
            >
              comprar
            </Button>
            <Button size="small" onClick={handleOpen}>
              detalles
            </Button>
          </CardActions>
        </Card>
      </form>

      <MyModal
        componente={<Description juego={juego} />}
        handleClose={handleClose}
        status={open}
      />
      <MySnackbar
        setOpenSnack={setOpenSnack}
        openSnack={openSnack}
        mensaje={"¡Agregaste tu compra al Carrito!🎉✨"}
      />
    </>
  );
}
