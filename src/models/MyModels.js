export class Compra {
  constructor(nombre, precio, cantidad, id) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    this.id = id;
  }
}

export const columnas = ["Nombre", "Precio", "Cantidad", "Acciones"];
