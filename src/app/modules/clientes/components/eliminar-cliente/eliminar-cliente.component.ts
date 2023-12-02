import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-eliminar-cliente',
  template: `
  <form class="flex flex-column">
      <div>
          <label class="block">Seguro que desea eliminarle ? </label>
      </div>

      <div style="justify-content:space-evenly;">
      <p-button icon="pi pi-check" [rounded]="true" [text]="true" severity="danger" (onClick)="eliminarCliente()"></p-button>
      <p-button icon="pi pi-times" [rounded]="true" [text]="true" severity="danger" (onClick)="noEliminarCliente()"></p-button>
      </div>
  </form>
`,
})

export class EliminarClienteComponent {

    constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {}


    eliminarCliente() {
        // Close the dialog and pass some data back to the calling component
        this.ref.close(true);
      }

    noEliminarCliente(){
        this.ref.close(false);
    }

}
