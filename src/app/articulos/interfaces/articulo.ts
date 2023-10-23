export interface Articulo{
  id:             String;
  nombre:         String;
  precio:         number;
  descripcion:    String;
  categoria:      String;
  estado:         Estado;
  alt_img?:        String;
}

export enum Estado {
  nuevo = "Nuevo",
  comoNuevo = "Como-Nuevo",
  buenEstado = "Buen-Estado",
  aceptable = "Aceptable"
}
