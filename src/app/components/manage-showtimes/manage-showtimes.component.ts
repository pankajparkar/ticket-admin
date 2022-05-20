import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DatabaseService } from 'ticket-booking-library';

@Component({
  selector: 'bmc-manage-showtimes',
  templateUrl: './manage-showtimes.component.html',
  styleUrls: ['./manage-showtimes.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManageShowtimesComponent {

  movies$ = this.db.getMovies(100);

  constructor(
    private db: DatabaseService,
  ) { }

}
