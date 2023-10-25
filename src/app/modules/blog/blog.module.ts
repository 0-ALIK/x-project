import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { VerBlogComponent } from './pages/blog/blog.component';


import { PanelModule  } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
  declarations: [
    VerBlogComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,

    PanelModule,
    ButtonModule,
    SidebarModule
    
  ]
})
export class BlogModule { }