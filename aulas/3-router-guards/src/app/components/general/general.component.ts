import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
  imports: [AsyncPipe]
})
export class GeneralComponent {
  data$: Observable<Data> = of();
  private readonly _activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
   this.data$ = this._activatedRoute.data;
  }
}
