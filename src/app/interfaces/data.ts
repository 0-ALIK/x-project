import { Direccion, Provincia } from "./direccion.interface";
import { Compra, FormaPago, Pedido, PedidoEstado } from "./pedido.interface";
import { Permisos } from "./permisos.interface";
import { Categoria, Marca, Producto } from "./producto.iterface";
import { Admin, Cliente, Empresa } from "./usuario.inteface";


export const categorias: Categoria[] = [
    { id_categoria: 1, nombre: 'Electrónica' },
    { id_categoria: 2, nombre: 'Ropa' },
    { id_categoria: 3, nombre: 'Hogar' },
];

export const marcas: Marca[] = [
    { id_marca: 1, nombre: 'Samsung', descripcion: 'Electrónica', logo: 'https://cdn.pixabay.com/photo/2023/10/12/20/16/autumncontest-8311751_1280.jpg' },
    { id_marca: 2, nombre: 'Nike', descripcion: 'Ropa deportiva', logo: 'https://cdn.pixabay.com/photo/2023/10/12/20/16/autumncontest-8311751_1280.jpg' },
    { id_marca: 3, nombre: 'KitchenAid', descripcion: 'Electrodomésticos', logo: 'https://cdn.pixabay.com/photo/2023/10/12/20/16/autumncontest-8311751_1280.jpg' },
];

export const productos: Producto[] = [
    {
        id_producto: 1,
        marca: marcas[0],
        categoria: categorias[0],
        nombre: 'Televisor LED 4K',
        precio_unit: 799.99,
        cantidad_por_caja: 5,
        foto: 'https://cdn.pixabay.com/photo/2023/10/12/20/16/autumncontest-8311751_1280.jpg',
        punto_reorden: 10,
        cantidad_cajas: 20,
    },
    {
        id_producto: 2,
        marca: marcas[1],
        categoria: categorias[1],
        nombre: 'Zapatos para correr',
        precio_unit: 89.99,
        cantidad_por_caja: 10,
        foto: 'https://cdn.pixabay.com/photo/2023/10/12/20/16/autumncontest-8311751_1280.jpg',
        punto_reorden: 15,
        cantidad_cajas: 30,
    },
    {
        id_producto: 3,
        marca: marcas[2],
        categoria: categorias[0],
        nombre: 'Batidora de pie',
        precio_unit: 149.99,
        cantidad_por_caja: 3,
        foto: 'https://cdn.pixabay.com/photo/2023/10/12/20/16/autumncontest-8311751_1280.jpg',
        punto_reorden: 5,
        cantidad_cajas: 5,
    },
];

export const provincias: Provincia[] = [
    { id_provincia: 1, nombre: 'Madrid' },
    { id_provincia: 2, nombre: 'Barcelona' },
    { id_provincia: 3, nombre: 'Valencia' },
    { id_provincia: 4, nombre: 'Sevilla' },
    { id_provincia: 5, nombre: 'Málaga' }
];

export const direcciones: Direccion[] = [
    { id_direccion: 1, provincia: provincias[0], codigo_postal: '28001', telefono: '123-456-7890', detalles: 'Calle A, 123' },
    { id_direccion: 2, provincia: provincias[1], codigo_postal: '08001', telefono: '987-654-3210', detalles: 'Avenida B, 456' },
    { id_direccion: 3, provincia: provincias[2], codigo_postal: '46001', telefono: '555-123-4567', detalles: 'Plaza C, 789' },
    { id_direccion: 4, provincia: provincias[3], codigo_postal: '41001', telefono: '333-999-7777', detalles: 'Calle D, 101' },
    { id_direccion: 5, provincia: provincias[4], codigo_postal: '29001', telefono: '777-888-9999', detalles: 'Avenida E, 789' }
];

export const permisosArray: Permisos[] = [
    {
      id_permisos: 1,
      gestiona_inventario: true,
      gestiona_clientes: false,
      gestiona_ventas: true,
      gestiona_soporte: false,
      gestiona_analitica: true,
      gestiona_permisos: false,
    },
    {
      id_permisos: 2,
      gestiona_inventario: false,
      gestiona_clientes: true,
      gestiona_ventas: false,
      gestiona_soporte: true,
      gestiona_analitica: false,
      gestiona_permisos: true,
    },
    {
      id_permisos: 3,
      gestiona_inventario: true,
      gestiona_clientes: true,
      gestiona_ventas: true,
      gestiona_soporte: false,
      gestiona_analitica: true,
      gestiona_permisos: true,
    },
];

export const admins: Admin[] = [
    {
      id_usuario: 1,
      nombre: "Admin1",
      correo: "admin1@example.com",
      pass: "password1",
      rol: "Administrador",
      foto: "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg",
      telefono: "123-456-7890",
      detalles: "Detalles del administrador 1",
      id_admin: 101,
      apellido: "Apellido1",
      genero: "Masculino",
      cedula: "1234567890",
      permisos: permisosArray[0],
    },
    {
      id_usuario: 2,
      nombre: "Admin2",
      correo: "admin2@example.com",
      pass: "password2",
      rol: "Administrador",
      foto: "https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_1280.jpg",
      telefono: "987-654-3210",
      detalles: "Detalles del administrador 2",
      id_admin: 102,
      apellido: "Apellido2",
      genero: "Femenino",
      cedula: "0987654321",
      permisos: permisosArray[1],
    },
    {
      id_usuario: 3,
      nombre: "Admin3",
      correo: "admin3@example.com",
      pass: "password3",
      rol: "Administrador",
      foto: "https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633_1280.jpg",
      telefono: "555-555-5555",
      detalles: "Detalles del administrador 3",
      id_admin: 103,
      apellido: "Apellido3",
      genero: "No especificado",
      cedula: "5555555555",
      permisos: permisosArray[2],
    },
];

export const compras: Compra[] = [
    {
      id_compra: 1,
      admin: admins[0],
      fecha: new Date('2023-10-30'),
      cantidad: 5,
      producto: productos[0],
    },
    {
      id_compra: 2,
      admin: admins[1],
      fecha: new Date('2023-10-30'),
      cantidad: 3,
      producto: productos[1],
    },
    {
      id_compra: 3,
      admin: admins[2],
      fecha: new Date('2023-10-30'),
      cantidad: 2,
      producto: productos[2],
    },
];

export const empresas: Empresa[] = [
    {
      id_usuario: 1,
      nombre: "Empresa1",
      correo: "empresa1@example.com",
      pass: "password1",
      rol: "Empresa",
      foto: "https://cdn.pixabay.com/photo/2023/07/04/07/25/self-consciousness-8105584_640.jpg",
      telefono: "111-111-1111",
      detalles: "Detalles de la empresa 1",
      id_empresa: 101,
      RUC: "12345678901",
      razon_social: "Razón Social 1",
      documento: "Documento1",
      estado: "Activo",
      sucursales: [
        direcciones[2]
      ],
    },
    {
      id_usuario: 2,
      nombre: "Empresa2",
      correo: "empresa2@example.com",
      pass: "password2",
      rol: "Empresa",
      foto: "https://cdn.pixabay.com/photo/2016/09/14/20/50/tooth-1670434_640.png",
      telefono: "222-222-2222",
      detalles: "Detalles de la empresa 2",
      id_empresa: 102,
      RUC: "98765432102",
      razon_social: "Razón Social 2",
      documento: "Documento2",
      estado: "Inactivo",
      sucursales: [
        direcciones[3]
      ],
    },
    {
      id_usuario: 3,
      nombre: "Empresa3",
      correo: "empresa3@example.com",
      pass: "password3",
      rol: "Empresa",
      foto: "https://cdn.pixabay.com/photo/2016/09/17/07/03/instagram-1675670_640.png",
      telefono: "333-333-3333",
      detalles: "Detalles de la empresa 3",
      id_empresa: 103,
      RUC: "55555555553",
      razon_social: "Razón Social 3",
      documento: "Documento3",
      estado: "Activo",
      sucursales: [
        direcciones[4]
      ],
    },
];

export const clientes: Cliente[] = [
{
    id_usuario: 1,
    nombre: "Juan",
    correo: "juan@example.com",
    pass: "password1",
    rol: "Cliente",
    foto: "https://cdn.pixabay.com/photo/2023/09/30/09/12/dachshund-8285220_1280.jpg",
    telefono: "111-111-1111",
    detalles: "Detalles del cliente 1",
    id_cliente: 101,
    apellido: "Pérez",
    cedula: "1234567890",
    genero: "Masculino",
    estado: "Activo",
    empresa: empresas[0],
    direcciones: [],
  },
  {
    id_usuario: 2,
    nombre: "María",
    correo: "maria@example.com",
    pass: "password2",
    rol: "Cliente",
    foto: "https://cdn.pixabay.com/photo/2023/10/21/18/51/woman-8332162_640.jpg",
    telefono: "222-222-2222",
    detalles: "Detalles del cliente 2",
    id_cliente: 102,
    apellido: "González",
    cedula: "9876543210",
    genero: "Femenino",
    estado: "Inactivo",
    direcciones: [
      direcciones[0],
      direcciones[1]
    ],
  },
  {
    id_usuario: 3,
    nombre: "Roberto",
    correo: "roberto@example.com",
    pass: "password3",
    rol: "Cliente",
    foto: "https://cdn.pixabay.com/photo/2023/10/21/18/51/woman-8332162_640.jpg",
    telefono: "333-333-3333",
    detalles: "Detalles del cliente 3",
    id_cliente: 103,
    apellido: "Martínez",
    cedula: "5555555555",
    genero: "No especificado",
    estado: "Activo",
    empresa: empresas[0],
    direcciones: [],
  },
];

export const pedidoEstados: PedidoEstado[] = [
    {id_estado_pedido: 1, estado: 'proceso'},
    {id_estado_pedido: 2, estado: 'enviado'},
    {id_estado_pedido: 3, estado: 'entregado'},
];

export const formasPago: FormaPago[] = [
    {id_forma_pago: 1, nombre: 'pago por ventanilla'},
    {id_forma_pago: 2, nombre: 'transferecia bancaria'},
    {id_forma_pago: 3, nombre: 'tarjeta de crédito'}
];

export const pedidos: Pedido[] = [
    {
        id_pedido: 1,
        cliente: clientes[0],
        fecha: new Date(),
        pagos: [
            {
                id_pago: 1,
                fecha: new Date(),
                forma_pago: formasPago[0],
                monto: 1000,
            },
            {
                id_pago: 2,
                fecha: new Date(),
                forma_pago: formasPago[1],
                monto: 50,
            }
        ],
        estado: pedidoEstados[0],
        direccion: direcciones[2],
        pedido_producto: [
            { id_pedido_producto: 1, cantidad: 4, producto: productos[0] },
            { id_pedido_producto: 2, cantidad: 2, producto: productos[1] },
        ],
    },
    {
        id_pedido: 2,
        cliente: clientes[1],
        fecha: new Date(),
        pagos: [
            {
                id_pago: 1,
                fecha: new Date(),
                forma_pago: formasPago[0],
                monto: 100,
            },
            {
                id_pago: 2,
                fecha: new Date(),
                forma_pago: formasPago[1],
                monto: 50,
            }
        ],
        estado: pedidoEstados[2],
        direccion: direcciones[0],
        pedido_producto: [
            { id_pedido_producto: 1, cantidad: 2, producto: productos[1] },
            { id_pedido_producto: 2, cantidad: 5, producto: productos[2] },
        ]
    },

];
