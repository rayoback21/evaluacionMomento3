import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicodeAguilaComponent } from './picode-aguila.component';

describe('PicodeAguilaComponent', () => {
  let component: PicodeAguilaComponent;
  let fixture: ComponentFixture<PicodeAguilaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PicodeAguilaComponent]
    });
    fixture = TestBed.createComponent(PicodeAguilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
