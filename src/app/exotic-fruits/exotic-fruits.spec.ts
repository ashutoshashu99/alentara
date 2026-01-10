import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoticFruits } from './exotic-fruits';

describe('ExoticFruits', () => {
  let component: ExoticFruits;
  let fixture: ComponentFixture<ExoticFruits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExoticFruits]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExoticFruits);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
