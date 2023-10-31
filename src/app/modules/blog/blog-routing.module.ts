import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerBlogComponent } from './pages/blog/blog.component';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: VerBlogComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
