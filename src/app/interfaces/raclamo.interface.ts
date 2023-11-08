import { Pedido } from "./pedido.interface";
import { Admin, Cliente } from "./usuario.inteface";

export interface ReclamoCategoria {
    id_reclamo_categoria?: number;
    nombre?: string;
}

export interface ReclamoPrioridad {
    id_reclamo_prioridad?: number;
    prioridad?: string;
}

export interface ReclamoEstado {
    id_reclamo_estado?: number;
    estado?: string;
}

export interface Reclamo {
    id_reclamo?: number;
    admin?: Admin;
    pedido?: Pedido;
    categora?: ReclamoCategoria;
    prioridad?: ReclamoPrioridad;
    estado?: ReclamoEstado;
    descripcion?: string;
    evidencia?: string;
    fecha?: Date;
    fecha_cambio_estado?: Date;
}

export interface Mensaje {
    id_mensaje?: number;
    reclamo?: Reclamo;
    mensaje?: string;
    fecha_envio?: Date;
    admin?: Admin;
    cliente?: Cliente;
    remitente?: string;
}

export interface Sugerencia {
    id_sugerencia?: number;
    contenido?: string;
    fecha?: Date;
    valoracion?: number;
    cliente?: Cliente;
}
