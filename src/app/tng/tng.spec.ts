import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tng } from './tng';

describe('Tng', () => {
  let component: Tng;
  let fixture: ComponentFixture<Tng>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tng]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tng);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
