import { Component, OnInit, Input, SimpleChange, SimpleChanges, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { Movie } from '../../interface/movie';
import { DatabaseService } from '../../service/database.service';
import { ShowtimeDate } from 'src/app/interface/showtime-date';

@Component({
  selector: 'app-showtimes',
  templateUrl: './showtimes.component.html',
  styleUrls: ['./showtimes.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowtimesComponent implements OnInit, OnChanges {
  @Input() movie!: Movie;
  @Input() showAllTimes = false;
  @Input() filterDate: string = '';
  showtimes: ShowtimeDate[] = [];

  constructor(
    private db: DatabaseService,
  ) { }

  ngOnInit() {
    this.getShowtimes();
  }

  getShowtimes() {
    this.db.getMovieShowtimes(this.movie, this.filterDate, this.showAllTimes).subscribe(
      (showtimes) => this.showtimes = showtimes
    )
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['showAllTimes']) {
      this.getShowtimes();
    }
  }
}
