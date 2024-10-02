import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [ReactiveFormsModule]
})
export class LoginComponent {
  private readonly _authService = inject(AuthService);
  private readonly _router = inject(Router)

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  onLogin() {
    const user: string = this.loginForm.value.username;
    const password: string = this. loginForm.value.password;
    this._authService.login(user, password).subscribe({
      next: (_) =>{
        this._router.navigate(['dashboard'])
      },
      error: (error) => {
        console.log(error);
        const UNAUTHORIZEDS_CREDENTIALS_ERROR_401 = 401;
        if(error.status === UNAUTHORIZEDS_CREDENTIALS_ERROR_401){
          this.loginForm.setErrors({ invalidCredentials: true });
        } else {
          this.loginForm.setErrors({ generalCredentialsError: true });
        }
      }
    })
  }
}
