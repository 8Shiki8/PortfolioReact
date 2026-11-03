import Box from "@mui/material/Box";
import "./css/Home.css";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Unity, useUnityContext } from "react-unity-webgl";
import { useEffect, useState } from "react";

export default function Home() {
  const navigate = useNavigate();
  const MyButton = styled(Button)({
    background: "linear-gradient(45deg, #00e1ff 30%, #62f59f 90%)",
    margin: "40px",
    border: 0,
    borderRadius: 3,
    boxShadow: " 0px 0px 5px 3px #62f59f",
    color: "white",
    height: 48,
    padding: "0 30px",
    "&:hover": {
      background: "linear-gradient(45deg, #00e1ff 30%, #87f0b3 90%)",
    },
  });
  const [error, setError] = useState(null);
  const { unityProvider, unload, isLoaded } = useUnityContext({
    loaderUrl: "/WebGL Builds1/Build/WebGL Builds1.loader.js",
    dataUrl: "/WebGL Builds1/Build/WebGL Builds1.data.br",
    frameworkUrl: "/WebGL Builds1/Build/WebGL Builds1.framework.js.br",
    codeUrl: "/WebGL Builds1/Build/WebGL Builds1.wasm.br",
    streamingAssetsUrl: "StreamingAssets",
    companyName: "asd",
    productVersion: "1.0",
    productName: "asdasd",
  });

  const UnityFunc = () => {
    return (
      <Unity
        unityProvider={unityProvider}
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "960px",
          maxHeight: "600px",
        }}
      />
    );
  };

  useEffect(() => {
    const handleError = (error) => {
      console.error("Error al cargar Unity:", error);
      setError(
        "Error al cargar Unity. Por favor, verifica la consola para más detalles."
      );
    };

    window.addEventListener("error", handleError);

    return () => {
      window.removeEventListener("error", handleError);
      if (isLoaded) {
        unload();
      }
    };
  }, [unload, isLoaded]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          height: "800px",
          color: "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            minHeight: "100vh",
            minWidth: "99vw",
          }}
        >
          <video
            src="/src/assets/fondo.mp4"
            autoPlay
            muted
            loop
            disablePictureInPicture
            controlsList="nodownload nofullscreen"
          ></video>

          <Box className="textContainer">
            {UnityFunc()}
            {error}
            <Typography
              className="textTitle textGradiente"
              variant="h4"
              gutterBottom
            >
              ¡¡Tus Juegos En Un Solo Lugar!!
            </Typography>
            <MyButton
              onClick={() => {
                navigate("/products");
              }}
            >
              {" "}
              ir a la tienda
            </MyButton>
          </Box>
        </Box>
      </Box>
    </>
  );
}
