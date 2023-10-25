import { Direccion } from "./direccion.interface";
import { Producto } from "./producto.iterface";
import { Admin, Cliente, Empresa } from "./usuario.inteface";

export interface FormaPago {
    id_forma_pago?: number;
    nombre?: string;
}

export interface Pago {
    id_pago?: number;
    monto?: number;
    fecha?: Date;
    forma_pago?: FormaPago;
}

export interface PedidoProductos {
    id_pedido_producto?: number;
    producto?: Producto;
    cantidad?: number;
}

export interface EstadoPedido {

}

export interface Pedido {
    id_pedido?: number;
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

export interface Compra {
    id_compra?: number;
    admin?: Admin;
    fecha?: Date;
    cantidad?: number;
}
