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

@NgModule({
  declarations: [
    VerBlogComponent
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
    TagModule
  ]
})
export class BlogModule { }
