import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-inventario',
  templateUrl: './table-inventario.component.html',
  styleUrls: ['./table-inventario.component.css']
})


export class TableInventarioComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  public products = [
    { name: 'Coca Cola', category: 'Bebidas', type: 'Refresco', price_unit: 10.00, stock: 15, photo: 'null', p_reorden: 'null' },
    { name: 'Coca Cola', category: 'Bebidas', type: 'Refresco', price_unit: 10.00, stock: 15, photo: 'null', p_reorden: 'null' },
    { name: 'Coca Cola', category: 'Bebidas', type: 'Refresco', price_unit: 10.00, stock: 15, photo: 'null', p_reorden: 'null' }
  ];



}


