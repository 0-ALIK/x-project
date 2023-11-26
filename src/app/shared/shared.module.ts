import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from 'primeng/menu';
import { SidebarModule } from 'primeng/sidebar';
import { ImagePreviewComponent } from './components/image-preview/image-preview.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';


@NgModule({
    declarations: [
        SidebarComponent,
        NavComponent,
        ImagePreviewComponent
    ],
    exports: [
        SidebarComponent,
        NavComponent,
        ImagePreviewComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ButtonModule,
        AvatarModule,
        MenuModule,
        SidebarModule,
        OverlayPanelModule
    ]
})
export class SharedModule { }
