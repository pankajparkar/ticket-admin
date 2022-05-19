import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageShowTimesComponent } from './manage-show-times.component';

describe('ManageShowTimesComponent', () => {
  let component: ManageShowTimesComponent;
  let fixture: ComponentFixture<ManageShowTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageShowTimesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageShowTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
