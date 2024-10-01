import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comp1',
  standalone: true,
  imports: [],
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.scss'
})
export class Comp1Component implements OnInit {
  @Input() set nome(value: string){

  }

  private readonly _activatedRoute = inject(ActivatedRoute)

  ngOnInit() {
    console.log('Snapshot',this._activatedRoute.snapshot.queryParams)
    this._activatedRoute.queryParams.subscribe(
      (params => console.log('Subscribe params',params))
    )
  }

}
