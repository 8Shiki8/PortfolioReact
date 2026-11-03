import Box from "@mui/joy/Box";
import CircularProgress from "@mui/joy/CircularProgress";

export default function MySpinner() {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          display: "flex",
          gap: 2,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <CircularProgress variant="plain" size="lg" />

        <Box>Cargando...</Box>
      </Box>
    </>
  );
}
