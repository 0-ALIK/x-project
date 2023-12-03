export interface Provincia {
    id_provincia?: number;
    nombre?: string;
}

export interface Direccion {
    nombre_sucursal?: string;
    id_direccion?: number;
    provincia?: Provincia;
    codigo_postal?: string;
    telefono?: string;
    detalles?: string;
}
