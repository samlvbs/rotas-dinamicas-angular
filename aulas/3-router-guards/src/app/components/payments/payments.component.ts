import { Component, inject } from '@angular/core';
import { DebitComponent } from "../debit/debit.component";
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
  imports: [DebitComponent, RouterOutlet]
})
export class PaymentsComponent {
  isWalletBlocked = false;
  private readonly _router = inject(Router);
  private readonly _activatedRoute = inject(ActivatedRoute);

  navigate(path: string) {
    this._router.navigate([path], { relativeTo: this._activatedRoute}).then((success) => {
      if(success === null) return;
      if(success){
        this.isWalletBlocked = false;
      } else {
        this._router.navigate(['/dashboard/payments']);
        this.isWalletBlocked = true;
      }
      console.log(success);
    })
  }


}
