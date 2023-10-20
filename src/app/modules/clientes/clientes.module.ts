import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesRoutingModule } from './clientes-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { Table, TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { EditarAgregarEmpComponent } from './pages/editar-agregar-emp/editar-agregar-emp.component';
import { MultiSelectModule} from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { Slider, SliderModule } from 'primeng/slider';
import { ProgressBarModule } from 'primeng/progressbar';
import { FormsModule } from '@angular/forms';
import { TabMenuModule } from 'primeng/tabmenu';
import { VerClientesComponent } from './pages/ver-clientes/ver-clientes.component';
import { ClientesTableComponent } from './components/clientes-table/clientes-table.component';
import { EmpresasTableComponent } from './components/empresas-table/empresas-table.component';
import { SolicitudCardComponent } from './components/solicitud-card/solicitud-card.component';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    PerfilComponent,
    EditarAgregarEmpComponent,
    VerClientesComponent,
    ClientesTableComponent,
    EmpresasTableComponent,
    SolicitudCardComponent,

  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    SharedModule,
    TableModule,
    ButtonModule,
    MultiSelectModule,
    DropdownModule,
    TagModule,
    SliderModule,
    ProgressBarModule,
    FormsModule,
    TabMenuModule,
    CardModule,
    AvatarGroupModule,
    AvatarModule,
    InputTextModule
]
})
export class ClientesModule {

}
