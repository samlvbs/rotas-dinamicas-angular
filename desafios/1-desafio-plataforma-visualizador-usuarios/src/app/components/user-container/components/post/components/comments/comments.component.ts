import { Component, inject, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IComment } from '../../../../../../interfaces/comment.interface';
import { ActivatedRoute } from '@angular/router';
import { CommentsListService } from '../../../../../../services/comments-list.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent implements OnInit {
  commentsList$: Observable<IComment[]> = of([]);

  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _commentsListService = inject(CommentsListService)

  ngOnInit() {
    this._activatedRoute.parent?.params.subscribe(
      (params) => this.commentsList$ = this._commentsListService.getPostComment(params['postId'])
    )
  }
}
