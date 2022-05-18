import { Component, OnInit, Input, SimpleChange, SimpleChanges, OnChanges } from '@angular/core';
import { Movie } from '../../interface/movie';
import { DatabaseService } from '../../service/database.service';
import { ShowtimeDate } from 'src/app/interface/showtime-date';

@Component({
  selector: 'app-showtimes',
  templateUrl: './showtimes.component.html',
  styleUrls: ['./showtimes.component.sass']
})
export class ShowtimesComponent implements OnInit, OnChanges {
  @Input() movie!: Movie;
  @Input() showAllTimes = false;
  @Input() filterDate: string = '';
  showtimes$ = this.db.getMovieShowtimes(this.movie, this.filterDate, this.showAllTimes);

  constructor(
    private db: DatabaseService,
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    // if (changes['showAllTimes']) {
    //   this.getShowtimes();
    // }
  }
}
