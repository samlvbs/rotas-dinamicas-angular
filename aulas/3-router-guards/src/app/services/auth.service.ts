import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Injectable, Input } from "@angular/core";
import { jwtDecode } from "jwt-decode";
import { map, Observable } from "rxjs";

@Injectable ({
  providedIn: 'root'
})

export class AuthService{
  private readonly _httpClient = inject(HttpClient)
  // private readonly _server = inject()
  @Input() user: string = '';
  @Input() password: string = ''


  login(username: string, password: string): Observable<{token: string}> {
    return this._httpClient.post<{token: string}>('http://localhost:3000/login', {username, password}).pipe(
      map(resp => {
        localStorage.setItem('access-token', resp.token);
        return resp;
      })
    )
  }

  verifyToken(): Observable<{valid: boolean; user: string; }>{
    const headers = new HttpHeaders().set('Authorization', 'Bearer '+localStorage.getItem('access-token') )
    return this._httpClient.get<{valid: boolean; user: string; }>('http://localhost:3000/verify-token', { headers});
  }

  getUserScopes(): string[]{
    const token = localStorage.getItem('access-token');

    if(!token){
      return [];
    }

    const decoded: any = jwtDecode(token);

    return decoded.scopes;
  }

}
