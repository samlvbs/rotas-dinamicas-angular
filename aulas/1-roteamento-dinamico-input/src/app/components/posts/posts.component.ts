import { Component, inject, Input, input, OnInit } from '@angular/core';
import { IPost, PostsService } from '../../services/posts.service';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [AsyncPipe, RouterOutlet, RouterLink],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit{
  postsList$: Observable<IPost[]> = of([]);
  private readonly _postsService = inject(PostsService);
  _userId: string = '';
   // @Input() userId: string = '';

  @Input() set userId(value: string){
    this.postsList$ = this._postsService.getUserPosts(value)
    this._userId = value;
  }

  ngOnInit() {
    console.log('ID: '+this.userId)
    // this.postsList$ = this._postsService.getUserPosts(this.userId)
  }
}
