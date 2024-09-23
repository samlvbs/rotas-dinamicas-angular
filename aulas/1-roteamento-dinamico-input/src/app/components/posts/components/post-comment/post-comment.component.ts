import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss']
})
export class PostCommentComponent implements OnInit{

  private readonly _activatedRoute = inject(ActivatedRoute)

  // Pega o id do post atual. Não funciona para o userId.
  @Input() set postId(value: string){
    console.log('postId: ', value)
  }

  ngOnInit() {
    this._activatedRoute.parent?.params.subscribe(value => {
      console.log('userID: ', value);
    })
  }
}
