import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  getUser(username: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/${username}`);
  }

  loadData(): any[]{
    const data = localStorage.getItem('githubusers');
    if (data){
      return JSON.parse(data);
    }
    else {
      return [];
    }
  }

  saveUser(user: any): void {
    const data = this.loadData();
    data.push(user);
    localStorage.setItem('githubusers', JSON.stringify(data));
  }

  saveUsers(user: any[]): void {
    localStorage.setItem('githubusers', JSON.stringify(user));
  }
}
