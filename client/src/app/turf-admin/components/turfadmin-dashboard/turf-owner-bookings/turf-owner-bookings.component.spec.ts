import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurfOwnerBookingsComponent } from './turf-owner-bookings.component';

describe('TurfOwnerBookingsComponent', () => {
  let component: TurfOwnerBookingsComponent;
  let fixture: ComponentFixture<TurfOwnerBookingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TurfOwnerBookingsComponent]
    });
    fixture = TestBed.createComponent(TurfOwnerBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
