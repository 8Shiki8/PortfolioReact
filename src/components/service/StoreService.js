"https://MiPortfolio.somee.com";

"/api/Categoria"; //get

"/api/Juego"; //add post

"/api/Juego/All"; //get

export function GetAllJuegos() {
  return fetch("https://MiPortfolio.somee.com/api/Juego/All")
    .then((response) => {
      if (response.status !== 200) {
        throw new Error("back error");
      }
      return response.json();
    })
    .then((data) => {
      // Hacer algo con los datos obtenidos
      console.log(data);

      return data;
    });
}
export function GetAllCategoria() {
  fetch("https://MiPortfolio.somee.com/api/Categoria")
    .then((response) => response.json())
    .then((data) => {
      // Hacer algo con los datos obtenidos
      console.log(data);
    })
    .catch((error) => {
      // Manejar el error
      console.error(error);
    });
}
