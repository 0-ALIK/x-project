export interface Provincia {
    provincia_id?: number;
    nombre?: string;
}

export interface Direccion {
    provincia?: Provincia;
    codigo_postal?: string;
    telefono?: string;
    detalles?: string;
}
