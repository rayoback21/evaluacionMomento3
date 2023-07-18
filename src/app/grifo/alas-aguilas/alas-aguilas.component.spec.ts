import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlasAguilasComponent } from './alas-aguilas.component';

describe('AlasAguilasComponent', () => {
  let component: AlasAguilasComponent;
  let fixture: ComponentFixture<AlasAguilasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlasAguilasComponent]
    });
    fixture = TestBed.createComponent(AlasAguilasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
