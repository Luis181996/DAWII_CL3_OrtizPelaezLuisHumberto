import { TestBed } from '@angular/core/testing';
import { Pregunta2Service } from './post2.service';

describe('Pregunta3Service', () => {
  let service: Pregunta2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pregunta2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});