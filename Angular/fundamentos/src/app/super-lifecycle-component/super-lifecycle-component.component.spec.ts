import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperLifecycleComponentComponent } from './super-lifecycle-component.component';

describe('SuperLifecycleComponentComponent', () => {
  let component: SuperLifecycleComponentComponent;
  let fixture: ComponentFixture<SuperLifecycleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperLifecycleComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperLifecycleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
