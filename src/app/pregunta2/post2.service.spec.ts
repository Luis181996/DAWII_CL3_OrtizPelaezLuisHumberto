import { TestBed } from '@angular/core/testing';
import { Pregunta3Service } from './post2.service';

describe('Pregunta3Service', () => {
  let service: Pregunta3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pregunta3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});