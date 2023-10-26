import { Direccion } from "./direccion.interface";
import { Permisos } from "./permisos.interface";

export interface Usuario {
    nombre?: string;
    correo?: string;
    pass?: string;
    rol?: string;
    foto?: string;
    telefono?: string;
    detalles?: string;
}

export interface Admin extends Usuario {
    apellido?: string;
    genero?: string;
    cedula?: string;
    permisos?: Permisos;
}

export interface Cliente extends Usuario {
    apellido?: string;
    cedula?: string;
    genero?: string;
    estado?: string;
    empresa?: Empresa;
    direcciones?: Direccion[]
}

export interface Empresa extends Usuario {
    RUC?: string;
    razon_social?: string;
    documento?: string;
    estado?: string;
    sucursales?: Direccion[]
}

