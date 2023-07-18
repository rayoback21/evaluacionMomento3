import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuerpoLeonComponent } from './cuerpo-leon.component';

describe('CuerpoLeonComponent', () => {
  let component: CuerpoLeonComponent;
  let fixture: ComponentFixture<CuerpoLeonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuerpoLeonComponent]
    });
    fixture = TestBed.createComponent(CuerpoLeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
