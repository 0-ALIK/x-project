import { Pedido } from "./pedido.interface";
import { Admin, Cliente } from "./usuario.inteface";

export interface ReclamoCategoria {
    reclamo_categoria_id?: number;
    nombre?: string;
}

export interface ReclamoPrioridad {
    reclamo_prioridad_id?: number;
    prioridad?: string;
}

export interface ReclamoEstado {
    reclamo_estado_id?: number;
    estado?: string;
}

export interface Reclamo {
    reclamo_id?: number;
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
    reclamo?: Reclamo;
    mensaje?: string;
    fecha_envio?: Date;
    admin?: Admin;
    cliente?: Cliente;
    remitente?: string;
}

