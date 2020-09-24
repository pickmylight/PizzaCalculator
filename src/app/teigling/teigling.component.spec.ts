import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeiglingComponent } from './teigling.component';

describe('TeiglingComponent', () => {
  let component: TeiglingComponent;
  let fixture: ComponentFixture<TeiglingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeiglingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeiglingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
