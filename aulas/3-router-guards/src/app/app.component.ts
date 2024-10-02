import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly _authService = inject(AuthService);
  scopes() {
    console.log("Scpopes: ",this._authService.getUserScopes());
  }
  verify() {
    this._authService.verifyToken().subscribe(res=>{
      console.log("Response Verify: ", res)
    })
  }
  login() {
    this._authService.login('admin', 'admin').subscribe(res =>{
      console.log("Response Login: ", res);
    })
  }

}
