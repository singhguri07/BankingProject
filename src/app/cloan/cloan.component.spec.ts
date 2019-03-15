import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloanComponent } from './cloan.component';

describe('CloanComponent', () => {
  let component: CloanComponent;
  let fixture: ComponentFixture<CloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
