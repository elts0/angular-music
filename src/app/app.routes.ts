import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { PageHomeComponent } from './features/page-home/page-home.component';
import { PageWelcomeComponent } from './features/page-welcome/page-welcome.component';
import { PageAboutComponent } from './features/page-about/page-about.component';

export const routes: Routes = [
  {
    path: '',
    component: PageWelcomeComponent,
  },
  {
    path: 'home',
    component: PageHomeComponent,
  },
  {
    path: 'about',
    component: PageAboutComponent,
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
