// src/app/services/booking.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Booking } from '../models/booking.entity';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private urlBase = 'http://localhost:3000';
  private endpoint = '/bookings';

  constructor(private http: HttpClient) { }

  getBookings(): Observable<Booking[]> {
    return this.http.get<any[]>(`${this.urlBase}${this.endpoint}`).pipe(
      map(data => data.map(item => new Booking(item)))
    );
  }
}
