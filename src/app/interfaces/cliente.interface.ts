import { Empresa } from "./empresa.interface";

export interface Cliente {
    nombre?: string;
    apellido?: string;
    cedula?: string;
    foto?: string;
    empresa?: Empresa;
}
