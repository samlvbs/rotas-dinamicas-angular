import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UsersListComponent } from './components/users-list/users-list.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: '/users-list',
    pathMatch: 'full',
  },
  {
    path: 'users-list',
    title: 'Lista de Usuarios',
    component: UsersListComponent
  },
  {
    path:'**',
    title: 'Pagina não encontrada',
    component: PageNotFoundComponent
  },
];
