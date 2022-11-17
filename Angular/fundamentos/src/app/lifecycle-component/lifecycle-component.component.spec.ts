import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleComponentComponent } from './lifecycle-component.component';

describe('LifecycleComponentComponent', () => {
  let component: LifecycleComponentComponent;
  let fixture: ComponentFixture<LifecycleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecycleComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecycleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
