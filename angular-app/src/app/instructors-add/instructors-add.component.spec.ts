import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorsAddComponent } from './instructors-add.component';

describe('InstructorsAddComponent', () => {
  let component: InstructorsAddComponent;
  let fixture: ComponentFixture<InstructorsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
