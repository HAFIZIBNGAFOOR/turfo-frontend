import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColumnType } from 'src/app/shared/models/shared-model';
import { TurfAdminService } from 'src/app/turf-admin/turf-admin-service/turf-admin.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {

  turfId!: string
  bookingsDetails: any;
  columnDatas: ColumnType = {
    columns: [
      { title: 'Booking ID ', dataProperty: 'bookingId', sortable: false, filterable: false },
      { title: 'Payment Type', dataProperty: 'paymentType', sortable: false, filterable: false },
      { title: 'Total Price', dataProperty: 'totalCost', sortable: false, filterable: false },
      { title: 'User ', dataProperty: 'user', sortable: false, filterable: false },
      { title: 'Booking Status', dataProperty: 'Status', sortable: false, filterable: false },
      { title: 'Action', dataProperty: 'actions', sortable: false, filterable: false },

    ],
    rowActions: [
      { label: "View", dataProperty: "_id", actionIdtoReturn: '' },
    ],
    rowsPerPage: '3'
  };

  constructor(private route: ActivatedRoute, private turfAdminService: TurfAdminService) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.turfId = params.get('turfId') as string
      this.turfAdminService.getBookingsforSingleTurf(this.turfId).subscribe({
        next: (res: any) => {
          console.log(res);
          this.bookingsDetails = res.bookings.map((booking: any) => ({
            bookingId: booking.bookingId,
            Status: booking.bookingStatus,
            totalCost: booking.totalCost,
            paymentType: booking.paymentType,
            user: booking.user.userName,
            turfName: res.turf.turfName,
            actions: booking.bookingStatus === 'Confirmed' ? 'Cancel' : booking.bookingStatus,
            color: booking.bookingStatus === 'Confirmed' ? 'red' : 'primary',
            turfID: booking._id
          }))
        }
      })
    })
  }
  getToCancelbooking(id: any) {
    this.turfAdminService.cancelBooking(id).subscribe({
      next: (res: any) => {
        this.bookingsDetails = res.bookings.map((booking: any) => ({
          bookingId: booking.bookingId,
          Status: booking.bookingStatus,
          totalCost: booking.totalCost,
          paymentType: booking.paymentType,
          user: booking.user.userName,
          turfName: res.turf.turfName,
          actions: booking.bookingStatus === 'Confirmed' ? 'Cancel' : booking.bookingStatus,
          color: booking.bookingStatus === 'Confirmed' ? 'red' : 'primary',
          turfID: booking._id
        }))
      }
    })
  }
}
