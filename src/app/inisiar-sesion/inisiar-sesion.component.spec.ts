import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InisiarSesionComponent } from './inisiar-sesion.component';

describe('InisiarSesionComponent', () => {
  let component: InisiarSesionComponent;
  let fixture: ComponentFixture<InisiarSesionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InisiarSesionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InisiarSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
