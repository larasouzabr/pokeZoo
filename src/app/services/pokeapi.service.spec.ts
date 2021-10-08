import { TestBed } from '@angular/core/testing';

import { getPokemonsService } from './getPokemons.service';

describe('PokeapiService', () => {
  let service: getPokemonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(getPokemonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
