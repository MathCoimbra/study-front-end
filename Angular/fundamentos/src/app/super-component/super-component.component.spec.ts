import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperComponentComponent } from './super-component.component';

describe('SuperComponentComponent', () => {
  let component: SuperComponentComponent;
  let fixture: ComponentFixture<SuperComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
