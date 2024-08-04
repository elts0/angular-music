import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  // {
  //   path: 'library',
  //   component: PageNotFoundComponent,

  //   // children: [
  //   //   {
  //   //     path: '',
  //   //     redirectTo: 'tasks',
  //   //     pathMatch: 'prefix',
  //   //   },
  //   //   {
  //   //     path: 'tasks',
  //   //     component: TasksComponent,
  //   //   },
  //   //   {
  //   //     path: 'tasks/new',
  //   //     component: NewTaskComponent,
  //   //   },
  //   // ],
  // },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
