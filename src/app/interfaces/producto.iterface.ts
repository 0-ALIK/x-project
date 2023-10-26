export interface Categoria {
    categoria_id?: number;
    nombre?: string;
}

export interface Marca {
    marca_id?: number;
    nombre?: string;
    descripcion?: string;
    logo?: string;
}

export interface Producto {
    marca: Marca,
    categoria: Categoria,
    nombre?: string;
    precio_unit?: number;
    cantidad_por_caja?: number;
    foto?: string;
    punto_reorden?: number;
    cantidad_cajas?: number;
}


