import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalizedComponentComponent } from './personalized-component.component';

describe('PersonalizedComponentComponent', () => {
  let component: PersonalizedComponentComponent;
  let fixture: ComponentFixture<PersonalizedComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalizedComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalizedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
