import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlogRoutingModule } from './blog-routing.module';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PanelModule } from 'primeng/panel';
import { RatingModule } from 'primeng/rating';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { TagModule } from 'primeng/tag';
import { VerBlogComponent } from './pages/blog/blog.component';
import { ReviewDataviewComponent } from './components/generar-reviews/review-dataview/review-dataview.component';
import { GenerarRatingComponent } from './components/generar-rating/generar-rating/generar-rating.component';
import { GenerarFormComponent } from './components/generar-form/generar-form/generar-form.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    VerBlogComponent,
    ReviewDataviewComponent,
    GenerarRatingComponent,
    GenerarFormComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ButtonModule,
    DataViewModule,
    InputTextareaModule,
    PanelModule,
    RatingModule,
    SelectButtonModule,
    SidebarModule,
    TagModule,
    FormsModule, 
    ReactiveFormsModule,
  ]
  
})
export class BlogModule { }
