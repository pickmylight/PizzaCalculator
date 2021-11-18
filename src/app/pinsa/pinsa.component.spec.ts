import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinsaComponent } from './pinsa.component';

describe('PinsaComponent', () => {
  let component: PinsaComponent;
  let fixture: ComponentFixture<PinsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinsaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
