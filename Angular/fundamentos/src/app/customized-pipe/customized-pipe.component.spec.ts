import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedPipeComponent } from './customized-pipe.component';

describe('CustomizedPipeComponent', () => {
  let component: CustomizedPipeComponent;
  let fixture: ComponentFixture<CustomizedPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizedPipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomizedPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
