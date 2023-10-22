import { Cliente } from "./cliente.interface";
import { Empresa } from "./empresa.interface";

export interface Pedido {
    cliente?: Cliente,
    empresa?: Empresa,
    fecha?: Date,
    forma_pago?: string,
    estado?: string
}
