import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dialog-app-agregar-opinion',
  templateUrl: './dialog-agregar-opinion.component.html',
  styleUrls: ['./dialog-agregar-opinion.component.css']
})
export class DialogAgregarOpinionComponent implements OnInit {

    loading: boolean = false;
    opinion: any[] | undefined
    value: number | undefined

    ngOnInit(): void {
    }

    load(){

    }

    enviarOpinion() {
        this.loading = true;

        setTimeout(() => {
            this.loading = false
        }, 2000);
        console.log('Mensaje enviado:', this.opinion);

      }

}
