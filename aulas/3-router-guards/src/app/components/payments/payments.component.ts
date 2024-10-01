import { Component } from '@angular/core';
import { DebitComponent } from "../debit/debit.component";

@Component({
  standalone: true,
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css'],
  imports: [DebitComponent]
})
export class PaymentsComponent {


}
