import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { VerBlogComponent } from './pages/blog/blog.component';
import { PanelModule  } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { RatingModule } from 'primeng/rating';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SelectButtonModule } from 'primeng/selectbutton';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { CardBlogUsuarioComponent } from './components/card-blog-usuario/card-blog-usuario.component';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast'
import { ScrollTopModule } from 'primeng/scrolltop';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { DividerModule } from 'primeng/divider';
import { DialogAgregarOpinionComponent } from './components/agregar-opinion/dialog-agregar-opinion.component';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';


@NgModule({
  declarations: [
    VerBlogComponent,
    CardBlogUsuarioComponent,
    DialogAgregarOpinionComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    InputTextareaModule,
    PanelModule,
    ButtonModule,
    SidebarModule,
    RatingModule,
    SelectButtonModule,
    DataViewModule,
    TagModule,
    AvatarGroupModule,
    AvatarModule,
    ProgressBarModule,
    ToastModule,
    ScrollTopModule,
    ScrollPanelModule,
    DividerModule,
    InputTextareaModule,
    FormsModule

  ],
  providers: [
    DialogService,
    MessageService
  ]
})
export class BlogModule { }
