import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaytododsComponent } from './displaytodods.component';

describe('DisplaytododsComponent', () => {
  let component: DisplaytododsComponent;
  let fixture: ComponentFixture<DisplaytododsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaytododsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaytododsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
