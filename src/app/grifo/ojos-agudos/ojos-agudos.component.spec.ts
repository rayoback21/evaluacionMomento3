import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OjosAgudosComponent } from './ojos-agudos.component';

describe('OjosAgudosComponent', () => {
  let component: OjosAgudosComponent;
  let fixture: ComponentFixture<OjosAgudosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OjosAgudosComponent]
    });
    fixture = TestBed.createComponent(OjosAgudosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
