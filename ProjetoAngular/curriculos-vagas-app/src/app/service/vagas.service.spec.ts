import { TestBed } from '@angular/core/testing';

import { VagasService } from './vagas.service';

describe('VagasService', () => {
  let service: VagasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VagasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
