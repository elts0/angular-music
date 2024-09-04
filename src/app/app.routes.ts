import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';
import { PageHomeComponent } from './features/page-home/page-home.component';
import { PageWelcomeComponent } from './features/page-welcome/page-welcome.component';
import { PageAboutComponent } from './features/page-about/page-about.component';
import { PageExploreComponent } from './features/page-explore/page-explore.component';
import { PlaylistComponent } from './shared/playlist/playlist.component';
import {
  PagePlaylistComponent,
  resolvePlaylist,
} from './features/page-playlist/page-playlist.component';

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
    path: 'explore',
    component: PageExploreComponent,
  },
  {
    path: 'playlist/:playlistId',
    component: PagePlaylistComponent,
    resolve: {
      playlist: resolvePlaylist,
    },
  },
  // {
  //   path: 'about',
  //   component: PageAboutComponent,
  // },
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
