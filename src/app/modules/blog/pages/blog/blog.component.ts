import { Component, ViewEncapsulation } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario.inteface';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DialogAgregarOpinionComponent } from '../../components/agregar-opinion/dialog-agregar-opinion.component';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-ver-tickets',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class VerBlogComponent {

    estrellas:number = 5

    public usuario: Usuario[] | undefined;

    private ref: DynamicDialogRef | undefined;

    constructor( public dialogService: DialogService,
        public messageService: MessageService){}

    agregarOpinion(): void{
        this.ref = this.dialogService.open(DialogAgregarOpinionComponent, {
            width: '60%',
            height: '75%',
            contentStyle: { overflow: 'auto' },
            baseZIndex: 10000,
            maximizable: true
        });

    }

}
