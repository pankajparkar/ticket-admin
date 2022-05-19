import { Component } from '@angular/core';
import { NavLink } from './models/navlink.model';

@Component({
  selector: 'bmc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Angular-Cinema';

  navLinks: NavLink[] = [
    { link: '/', name: 'Home' },
    { link: '/movies', name: 'Movies' },
  ]
}
