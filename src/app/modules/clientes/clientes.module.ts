import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesRoutingModule } from './clientes-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { EditarAgregarEmpComponent } from './pages/editar-agregar-emp/editar-agregar-emp.component';
import { MultiSelectModule} from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { TagModule } from 'primeng/tag';
import { SliderModule } from 'primeng/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabMenuModule } from 'primeng/tabmenu';
import { VerClientesComponent } from './pages/ver-clientes/ver-clientes.component';
import { ClientesTableComponent } from './components/clientes-table/clientes-table.component';
import { EmpresasTableComponent } from './components/empresas-table/empresas-table.component';
import { SolicitudCardComponent } from './components/solicitud-card/solicitud-card.component';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { FileUploadModule } from 'primeng/fileupload';
import { ImageModule } from 'primeng/image';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PerfilCardComponent } from './components/perfil-card/perfil-card.component';
import { PerfilClienteComponent } from './pages/perfil-cliente/perfil-cliente.component';
import { PerfilEmpresaComponent } from './pages/perfil-empresa/perfil-empresa.component';
import { ColaboradorCardComponent } from './components/colaborador-card/colaborador-card.component';
import { CardUserComponent } from './components/card-user/card-user.component';
import { SkeletonModule } from 'primeng/skeleton';
import { CardEmpresaComponent } from './components/card-empresa/card-empresa.component';
import { CardDireccionComponent } from './components/card-direccion/card-direccion.component';

@NgModule({
    declarations: [
        EditarAgregarEmpComponent,
        VerClientesComponent,
        ClientesTableComponent,
        EmpresasTableComponent,
        SolicitudCardComponent,
        PerfilCardComponent,
        PerfilClienteComponent,
        PerfilEmpresaComponent,
        ColaboradorCardComponent,
        CardUserComponent,
        CardEmpresaComponent,
        CardDireccionComponent,
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
        FormsModule,
        TabMenuModule,
        AvatarGroupModule,
        AvatarModule,
        InputTextModule,
        PaginatorModule,
        FileUploadModule,
        ImageModule,
        RadioButtonModule,
        SkeletonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        CardUserComponent,
        CardEmpresaComponent,
        CardDireccionComponent
    ]
})
export class ClientesModule {}
