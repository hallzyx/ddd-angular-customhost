import { Component } from '@angular/core';
import {MyBookingsTableComponent} from '../../components/my-bookings-table/my-bookings-table.component';

@Component({
  selector: 'app-my-bookings',
  imports: [
    MyBookingsTableComponent
  ],
  templateUrl: './my-bookings.component.html',
  styleUrl: './my-bookings.component.css'
})
export class MyBookingsComponent {

}
