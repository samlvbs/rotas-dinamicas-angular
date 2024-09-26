import { Component, inject, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IPost } from '../../../../interfaces/post.interface';
import { PostsListServices } from '../../../../services/posts-list.service';
import { AsyncPipe } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [AsyncPipe, RouterLink, RouterOutlet],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  post$: Observable<IPost> = of({} as IPost);
  private readonly _postService = inject(PostsListServices);

  @Input() set postId(value: string){
    this.post$ = this._postService.getPost(value)
  }
}
