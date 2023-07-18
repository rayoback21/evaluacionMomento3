import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrifoComponent } from './grifo.component';

describe('GrifoComponent', () => {
  let component: GrifoComponent;
  let fixture: ComponentFixture<GrifoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrifoComponent]
    });
    fixture = TestBed.createComponent(GrifoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
