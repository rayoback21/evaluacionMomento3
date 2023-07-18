import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarrasLeonComponent } from './garras-leon.component';

describe('GarrasLeonComponent', () => {
  let component: GarrasLeonComponent;
  let fixture: ComponentFixture<GarrasLeonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GarrasLeonComponent]
    });
    fixture = TestBed.createComponent(GarrasLeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
