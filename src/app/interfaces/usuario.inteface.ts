import { Direccion } from "./direccion.interface";
import { Permisos } from "./permisos.interface";

export interface Usuario {
    id_usuario?: number;
    nombre?: string;
    correo?: string;
    pass?: string;
    rol?: string;
    foto?: string;
    telefono?: string;
    detalles?: string;
}

export interface Admin extends Usuario {
    id_admin?: number;
    apellido?: string;
    genero?: string;
    cedula?: string;
    permisos?: Permisos;
}

export interface Cliente extends Usuario {
    id_cliente?: number;
    empresa_id?: number;
    apellido?: string;
    cedula?: string;
    genero?: string;
    estado?: string;
    empresa?: Empresa;
    direcciones?: Direccion[]
    created_at?: string;
}

export interface Empresa extends Usuario {
    id_empresa?: number;
    ruc?: string;
    razon_social?: string;
    documento?: string;
    estado?: string;
    sucursales?: Direccion[]
}

export interface Notificacion {
    contenido?: string;
    titulo?: string;
    icono?: string;
    ruta?: string;
    usuario?: Usuario;
}
