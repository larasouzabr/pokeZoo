import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeNamesComponent } from './poke-names.component';

describe('PokeNamesComponent', () => {
  let component: PokeNamesComponent;
  let fixture: ComponentFixture<PokeNamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeNamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
