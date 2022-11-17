import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service1ComponentComponent } from './service1-component.component';

describe('Service1ComponentComponent', () => {
  let component: Service1ComponentComponent;
  let fixture: ComponentFixture<Service1ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Service1ComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service1ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
