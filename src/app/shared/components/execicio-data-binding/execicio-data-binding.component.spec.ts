import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecicioDataBindingComponent } from './execicio-data-binding.component';

describe('ExecicioDataBindingComponent', () => {
  let component: ExecicioDataBindingComponent;
  let fixture: ComponentFixture<ExecicioDataBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecicioDataBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecicioDataBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
