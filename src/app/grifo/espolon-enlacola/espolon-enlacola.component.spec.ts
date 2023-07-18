import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspolonEnlacolaComponent } from './espolon-enlacola.component';

describe('EspolonEnlacolaComponent', () => {
  let component: EspolonEnlacolaComponent;
  let fixture: ComponentFixture<EspolonEnlacolaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EspolonEnlacolaComponent]
    });
    fixture = TestBed.createComponent(EspolonEnlacolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
