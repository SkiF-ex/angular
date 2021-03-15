import { NgModule } from '@angular/core';
import {RouterModule, Route} from '@angular/router';

const routes: Route[] = [
    {
      path: 'about',
      loadChildren: () => import('../components/about/about.module').then(m => m.AboutModule)
    },
    {
      path: '',
      loadChildren: () => import('../components/courses/container.module').then(m => m.ContainerModule)
    },
    {
      path: 'add',
      loadChildren: () => import('../components/form/form.module').then(m => m.FormModule)
    }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],

})
export class AppRoutingModule { }
