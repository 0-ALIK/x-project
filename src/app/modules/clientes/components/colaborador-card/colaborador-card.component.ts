import { Component, Input } from '@angular/core';
import { ApiEmpresaService } from 'src/app/services/api-empresa.service';

@Component({
  selector: 'app-colaborador-card',
  templateUrl: './colaborador-card.component.html',
  styleUrls: ['./colaborador-card.component.css']
})
export class ColaboradorCardComponent {

    @Input("colaborador")
    public colaborador: any | undefined;

    constructor(
        private apiService: ApiEmpresaService
    ){

    }
    public editarColaborador(){

    }

    public eliminarColaborador(id_colaborador: any){

            this.apiService.eliminarColaborador(id_colaborador).subscribe((resp:any)=>{
              console.log('Se elimino correctamente')
          })

    }
}
