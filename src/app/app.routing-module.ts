import { NgModule } from '@angular/core';
import {RouterModule, Route} from '@angular/router';

const routes: Route[] = [
    {
      path: 'about',
      loadChildren: () => import('./features/about/about.module').then(m => m.AboutModule)
    },
    {
      path: '',
      loadChildren: () => import('./features/courses/container.module').then(m => m.ContainerModule)
    },
    {
      path: 'add',
      loadChildren: () => import('./features/form/form.module').then(m => m.FormModule)
    }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],

})
export class AppRoutingModule { }
