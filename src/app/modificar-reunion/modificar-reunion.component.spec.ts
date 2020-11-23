import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarReunionComponent } from './modificar-reunion.component';

describe('ModificarReunionComponent', () => {
  let component: ModificarReunionComponent;
  let fixture: ComponentFixture<ModificarReunionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarReunionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarReunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
