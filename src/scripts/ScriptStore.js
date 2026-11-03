export const badgeSetter = (lista, setter) => {
  let badgeCont = 0;

  lista.map((compra) => {
    badgeCont = parseInt(compra.cantidad) + badgeCont;
  });

  setter(badgeCont);
};
