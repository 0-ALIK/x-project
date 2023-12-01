import { Component } from '@angular/core';
import {SugerenciasService} from '../../../../../services/sugerencias.service' ;

@Component({
  selector: 'app-review-dataview',
  templateUrl: './review-dataview.component.html',
  styleUrls: ['./review-dataview.component.css']
})
export class ReviewDataviewComponent {
  sugerenciasData: any[] = [];

  constructor(private sugerenciaService: SugerenciasService) {
    this.sugerenciaService.getSugerencias().subscribe((data) => {
      this.sugerenciasData = data;
    })
  }

}
