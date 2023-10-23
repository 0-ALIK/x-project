import { Direccion } from "./direccion.interface";
import { Producto } from "./producto.iterface";
import { Cliente, Empresa } from "./usuario.inteface";

export interface FormaPago {
    forma_pago_id?: number;
    nombre?: string;
}

export interface Pago {
    pago_id?: number;
    monto?: number;
    fecha?: Date;
    forma_pago?: FormaPago;
}

export interface PedidoProductos {
    pedido_producto_id?: number;
    producto?: Producto;
    cantidad?: number;
}

export interface Pedido {
    pedido_id?: number;
    cliente?: Cliente,
    fecha?: Date,
    fecha_cambio_estado?: Date,
    detalles?: string;
    forma_pago?: string;
    estado?: string;
    empresa?: Empresa;
    direccion?: Direccion;
    pedido_producto?: PedidoProductos[]
}
