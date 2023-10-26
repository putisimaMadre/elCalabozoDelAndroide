export interface Articulo{
  id:             number;
  nombre:         string;
  precio:         number;
  descripcion:    string;
  categoria:      string;
  estado:         Estado;
  alt_img?:       string;
  img1?:          string;
  img2?:          string;
  img3?:          string;
}

export enum Estado {
  nuevo = "Nuevo",
  comoNuevo = "Como-Nuevo",
  buenEstado = "Buen-Estado",
  aceptable = "Aceptable"
}
