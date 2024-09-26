import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodosListService } from '../../../../services/todos-list.service';
import { Observable, of } from 'rxjs';
import { TodosListResponse } from '../../../../types/todos-list-response';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [AsyncPipe, CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent implements OnInit{
  todosList$: Observable<TodosListResponse> = of([]);

  private readonly _todosListService = inject(TodosListService);
  private readonly _activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    //Atraves do ActivatedRoute conseguimos buscar o value = userId da rota pai
    this._activatedRoute.parent?.params.subscribe(
      (params) => this.todosList$ = this._todosListService.getUserTodos(params['userId'])
    )
  }
}
