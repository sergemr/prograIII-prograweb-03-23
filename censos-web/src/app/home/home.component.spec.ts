import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HOMEComponent } from './home.component';

describe('HOMEComponent', () => {
  let component: HOMEComponent;
  let fixture: ComponentFixture<HOMEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HOMEComponent]
    });
    fixture = TestBed.createComponent(HOMEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
