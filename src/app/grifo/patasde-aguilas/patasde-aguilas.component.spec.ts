import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatasdeAguilasComponent } from './patasde-aguilas.component';

describe('PatasdeAguilasComponent', () => {
  let component: PatasdeAguilasComponent;
  let fixture: ComponentFixture<PatasdeAguilasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatasdeAguilasComponent]
    });
    fixture = TestBed.createComponent(PatasdeAguilasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
