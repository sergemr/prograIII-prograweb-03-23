import { ComponentFixture, TestBed } from '@angular/core/testing';

import { INDEXComponent } from './index.component';

describe('INDEXComponent', () => {
  let component: INDEXComponent;
  let fixture: ComponentFixture<INDEXComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [INDEXComponent]
    });
    fixture = TestBed.createComponent(INDEXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
