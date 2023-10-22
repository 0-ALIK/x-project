import { Component } from '@angular/core';

@Component({
  selector: 'app-ver-tickets',
  templateUrl: './ver-tickets.component.html',
  styleUrls: ['./ver-tickets.component.css']
})
export class VerTicketsComponent {

  products: object[] = [
    { id:'#2345',usuario:'Jose M.',asunto:'Pedido Tardio',prioridad:'alta',estatus:'Revisión',fecha:'29/03/2023'},
    { id:'#4567',usuario:'Julian M.',asunto:'Pedido Tardio',prioridad:'alta',estatus:'Revisión',fecha:'25/03/2023'},
    { id:'#4576',usuario:'Moises M.',asunto:'Pedido Tardio',prioridad:'baja',estatus:'Revisión',fecha:'22/03/2023'},
    { id:'#4532',usuario:'Penelope M.',asunto:'Pedido Tardio',prioridad:'media',estatus:'Revisión',fecha:'20/03/2023'},
    { id:'#1297',usuario:'Miguel M.',asunto:'Pedido Tardio',prioridad:'baja',estatus:'Revisión',fecha:'2/03/2023'},
  ];
}
