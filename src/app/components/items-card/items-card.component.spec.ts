import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsCardComponent } from './items-card.component';

describe('ItemsCardComponent', () => {
  let component: ItemsCardComponent;
  let fixture: ComponentFixture<ItemsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
