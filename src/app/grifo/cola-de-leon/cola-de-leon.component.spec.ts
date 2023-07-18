import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaDeLeonComponent } from './cola-de-leon.component';

describe('ColaDeLeonComponent', () => {
  let component: ColaDeLeonComponent;
  let fixture: ComponentFixture<ColaDeLeonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColaDeLeonComponent]
    });
    fixture = TestBed.createComponent(ColaDeLeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
