import { Component, inject, Input, input, OnInit } from '@angular/core';
import { IPost, PostsService } from '../../services/posts.service';
import { Observable, of } from 'rxjs';
import { AsyncAction } from 'rxjs/internal/scheduler/AsyncAction';
import { AsyncPipe } from '@angular/common';
import { IUser } from '../../services/users.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit{
  //                              Observable vazio
  postsList$: Observable<IPost[]> = of([]);
  @Input() userId: string = '';

  private readonly _postsService = inject(PostsService);

  ngOnInit() {
    console.log('ID: '+this.userId)
    this.postsList$ = this._postsService.getUserPosts(this.userId)
  }
}
