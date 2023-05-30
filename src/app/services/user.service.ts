import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userUrl = 'http://localhost:8001/api/test/user';
  private modUrl = 'http://localhost:8001/api/test/mod';
  private adminUrl = 'http://localhost:8001/api/test/admin';

  constructor(private http: HttpClient) {}

  getserBoard(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }

  getUserBoard(): Observable<string> {
    return this.http.get(this.modUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }
}
