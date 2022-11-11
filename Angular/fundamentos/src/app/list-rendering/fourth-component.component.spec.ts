import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthComponentComponent } from './fourth-component.component';

describe('FourthComponentComponent', () => {
  let component: FourthComponentComponent;
  let fixture: ComponentFixture<FourthComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourthComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
