import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pregunta2 } from './post2';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Pregunta3Service {

    constructor(private http: HttpClient) { }
  
    listCharactersWithOddId(): Observable<pregunta2[]> {
      return this.http.get<any>("https://rickandmortyapi.com/api/character")
        .pipe(
          map(response => response.results.filter((character: pregunta2) => character.id % 2 !== 0))
        );
    }
  }