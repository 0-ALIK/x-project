export interface Categoria {
    id_categoria?: number;
    nombre?: string;
}

export interface Marca {
    id_marca?: number;
    nombre?: string;
    descripcion?: string;
    logo?: string;
}

export interface Producto {
    id_producto?: number;
    marca: Marca,
    categoria: Categoria,
    nombre?: string;
    precio_unit?: number;
    cantidad_por_caja?: number;
    foto?: string;
    punto_reorden?: number;
    cantidad_cajas?: number;
}


