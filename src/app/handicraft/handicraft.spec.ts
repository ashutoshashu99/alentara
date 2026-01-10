import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Handicraft } from './handicraft';

describe('Handicraft', () => {
  let component: Handicraft;
  let fixture: ComponentFixture<Handicraft>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Handicraft]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Handicraft);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
