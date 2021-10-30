import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerriesCardComponent } from './berries-card.component';

describe('BerriesCardComponent', () => {
  let component: BerriesCardComponent;
  let fixture: ComponentFixture<BerriesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BerriesCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BerriesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
