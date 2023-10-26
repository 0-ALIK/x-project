export interface Provincia {
    provincia_id?: number;
    nombre?: string;
}

export interface Direccion {
    direccion_id?: number;
    provincia?: Provincia;
    codigo_postal?: string;
    telefono?: string;
    detalles?: string;
}
