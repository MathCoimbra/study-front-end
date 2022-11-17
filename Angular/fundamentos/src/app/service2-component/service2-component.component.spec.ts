import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Service2ComponentComponent } from './service2-component.component';

describe('Service2ComponentComponent', () => {
  let component: Service2ComponentComponent;
  let fixture: ComponentFixture<Service2ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Service2ComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Service2ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
