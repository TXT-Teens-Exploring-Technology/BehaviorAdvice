import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HittingPageComponent } from './hitting-page.component';

describe('HittingPageComponent', () => {
  let component: HittingPageComponent;
  let fixture: ComponentFixture<HittingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HittingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HittingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
