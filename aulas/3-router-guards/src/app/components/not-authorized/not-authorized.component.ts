import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Data, RouterLink } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-not-authorized',
  templateUrl: './not-authorized.component.html',
  styleUrls: ['./not-authorized.component.scss'],
  imports:[AsyncPipe, RouterLink]
})
export class NotAuthorizedComponent {
  data$: Observable<Data> = of();
  private readonly _activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.data$ = this._activatedRoute.data;
  }
}
