import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlumasenElCuelloComponent } from './plumasen-el-cuello.component';

describe('PlumasenElCuelloComponent', () => {
  let component: PlumasenElCuelloComponent;
  let fixture: ComponentFixture<PlumasenElCuelloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlumasenElCuelloComponent]
    });
    fixture = TestBed.createComponent(PlumasenElCuelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
