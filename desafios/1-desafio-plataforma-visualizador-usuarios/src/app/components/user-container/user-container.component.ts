import { Component, inject, Input, OnInit } from '@angular/core';
import { UsersListService } from '../../services/users-list.service';
import { Observable, of } from 'rxjs';
import { IUser } from '../../interfaces/user.interface';
import { AsyncPipe } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-container',
  standalone: true,
  imports: [AsyncPipe, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './user-container.component.html',
  styleUrl: './user-container.component.scss'
})
export class UserContainerComponent  {
  user$: Observable<IUser> = of({} as IUser);
  private readonly _userService = inject(UsersListService);

  //Pega o valor da url com o id do user
  @Input() set userId(value: string){
    console.log('Value,', value)
    //traz o usuario de id = value resgatado da url
    this.user$ = this._userService.getUser(value);
  };


}
