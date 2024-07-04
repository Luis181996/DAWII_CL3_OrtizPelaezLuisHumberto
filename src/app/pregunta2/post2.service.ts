import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pregunta2 } from './post2';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
}

@Injectable({
  providedIn: 'root'
})

export class Pregunta2Service {

  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getHumanCharacters(): Observable<pregunta2[]> {
    return this.http.get<{ results: pregunta2[] }>(this.apiUrl).pipe(
      map(response => response.results.filter(character => character.species === 'Human'))
    );
  }
  }