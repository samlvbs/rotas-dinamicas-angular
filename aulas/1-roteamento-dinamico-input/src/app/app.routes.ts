import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostCommentComponent } from './components/posts/components/post-comment/post-comment.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    //lazy loading
    loadComponent: () => import('./components/users/users.component').then(m => m.UsersComponent),
    children: [
      {
        path: 'posts/:userId',
        //lazy loading
        loadComponent: () => import('./components/posts/posts.component').then(m => m.PostsComponent),
        children: [
          {
            path: ':postId',
            component: PostCommentComponent
          }
        ]

      }
    ],
  },
  // {
  //   path: 'posts/:userId',
  //   component: PostsComponent,

  // }
];
