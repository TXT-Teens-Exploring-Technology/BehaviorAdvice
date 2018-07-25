import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvisorsPageComponent } from './advisors-page.component';

describe('AdvisorsPageComponent', () => {
  let component: AdvisorsPageComponent;
  let fixture: ComponentFixture<AdvisorsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvisorsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvisorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
