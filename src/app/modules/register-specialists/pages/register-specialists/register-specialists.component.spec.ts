import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSpecialistsComponent } from './register-specialists.component';

describe('RegisterSpecialistsComponent', () => {
  let component: RegisterSpecialistsComponent;
  let fixture: ComponentFixture<RegisterSpecialistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterSpecialistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSpecialistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
