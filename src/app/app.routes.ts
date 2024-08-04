import { Routes } from '@angular/router';
import { ContentPanelComponent } from './content-panel/content-panel.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: ContentPanelComponent,
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
