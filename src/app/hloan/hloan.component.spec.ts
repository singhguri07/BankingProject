import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HloanComponent } from './hloan.component';

describe('HloanComponent', () => {
  let component: HloanComponent;
  let fixture: ComponentFixture<HloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
