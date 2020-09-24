import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentwrapperComponent } from './contentwrapper.component';

describe('ContentwrapperComponent', () => {
  let component: ContentwrapperComponent;
  let fixture: ComponentFixture<ContentwrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentwrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentwrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
