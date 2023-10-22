import { Component } from '@angular/core';

@Component({
  selector: 'app-table-entradas',
  templateUrl: './table-entradas.component.html',
  styleUrls: ['./table-entradas.component.css']
})
export class TableEntradasComponent {

  public persons = [
    { id: '001', admin: 'Ameth', date: '10/10/23', quantity: 77, product: 25, type: 'null', p_reorden: 'null' },
    { id: '001', admin: 'Ameth', date: '10/10/23', quantity: 77, product: 25, type: 'null', p_reorden: 'null' },
    { id: '001', admin: 'Ameth', date: '10/10/23', quantity: 77, product: 25, type: 'null', p_reorden: 'null' }
  ];

}
