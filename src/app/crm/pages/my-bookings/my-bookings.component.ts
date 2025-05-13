// src/app/crm/pages/mybookings/mybookings.component.ts
import { Component, OnInit } from '@angular/core';
import { BookingService } from '../../services/booking.service';
import { Booking } from '../../models/booking.entity';
import { MyBookingsTableComponent } from "../../components/my-bookings-table/my-bookings-table.component";

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css'],
  imports: [MyBookingsTableComponent]
})
export class MyBookingsComponent implements OnInit {
  bookings: Booking[] = [];

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.bookingService.getBookings().subscribe(
      (data: Booking[]) => {
        this.bookings = data;
      },
      (error) => {
        console.error('Error fetching bookings:', error);
      }
    );
  }
}
