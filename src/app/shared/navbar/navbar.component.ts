import { Component, Input, OnInit } from '@angular/core';
import { NavLink } from 'src/app/models/navlink.model';

@Component({
  selector: 'bmc-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  @Input() navLinks: NavLink[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
