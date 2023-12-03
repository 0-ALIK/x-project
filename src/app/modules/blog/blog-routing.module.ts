import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerBlogComponent } from './pages/blog/blog.component';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: VerBlogComponent
	},
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
