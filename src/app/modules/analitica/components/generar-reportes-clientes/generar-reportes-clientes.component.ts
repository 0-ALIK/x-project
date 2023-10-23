import { Component, OnInit } from '@angular/core';

interface Formato{
    name: string;
    code: string;
  }

@Component({
  selector: 'app-generar-reportes-clientes',
  templateUrl: './generar-reportes-clientes.component.html',
  styleUrls: ['./generar-reportes-clientes.component.css']
})
export class GenerarReportesClientesComponent implements OnInit {

    formatos: Formato[] | any;
    selectedFormato: Formato | any;
    value: string | undefined;

    selectedCategories: any[] = [];
        categories: any[] = [
            { name: 'Cantidad en Stock', key: 'A' },
            { name: 'Tipo de Producto', key: 'M' },
            { name: 'Categoria', key:'C'},
            { name: 'Precio Unitario', key: 'P' },
            { name: 'Research', key: 'R' },
            { name: 'Research', key: 'R' },
            { name: 'Research', key: 'R' },
            { name: 'Research', key: 'o' }
        ];

    ngOnInit() {
        this.formatos = [
            { nameFormato: '.txt', code: 'txt' },
            { nameFormato: '.doc', code: 'doc' },
            { nameFormato: '.docx', code: 'docx' },
            { nameFormato: '.pdf', code: 'pdf' },
            { nameFormato: '.xls', code: 'xls' },
            { nameFormato: 'xlsx', code: 'xlsx' },
            { nameFormato: '.xlsm', code: 'xlsm' },
            { nameFormato: '.png', code: 'png' },
            { nameFormato: '.ods', code: 'ods' },
            { nameFormato: '.xps', code: 'xps' },
        ];
    }
}
