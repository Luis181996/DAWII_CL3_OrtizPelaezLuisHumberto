import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Pregunta3Service {
  private apiUrl = "https://jsonplaceholder.typicode.com/comments"   

  constructor(private http: HttpClient) { }

  getFilteredComments(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(post => post.filter(post => post.email.endsWith('@garfield.biz')))
    );
  }
}