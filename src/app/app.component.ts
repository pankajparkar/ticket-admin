import { Component } from '@angular/core';
import { NavLink } from 'ticket-booking-library';

@Component({
  selector: 'bmc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  title = 'Ticket Admin';

  navLinks: NavLink[] = [
    { link: '/', name: 'Dashboard' },
    { link: '/collection', name: '$ Collection' },
    { link: '/manage-showtimes', name: 'Manage Showtimes' },
  ]
}
