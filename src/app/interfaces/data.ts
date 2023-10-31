import { Categoria, Marca, Producto } from "./producto.iterface";

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
