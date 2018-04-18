import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogprofileComponent } from './dogprofile.component';

describe('DogprofileComponent', () => {
  let component: DogprofileComponent;
  let fixture: ComponentFixture<DogprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
