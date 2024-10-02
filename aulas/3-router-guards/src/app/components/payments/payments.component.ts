import { Component } from '@angular/core';
import { DebitComponent } from "../debit/debit.component";
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
  imports: [DebitComponent, RouterOutlet]
})
export class PaymentsComponent {


}
