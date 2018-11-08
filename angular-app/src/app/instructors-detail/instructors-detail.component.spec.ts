import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorsDetailComponent } from './instructors-detail.component';

describe('InstructorsDetailComponent', () => {
  let component: InstructorsDetailComponent;
  let fixture: ComponentFixture<InstructorsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
