import { Movie } from './../../interface/movie';
import { DatabaseService } from './../../service/database.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movies-slider',
  templateUrl: './movies-slider.component.html',
  styleUrls: ['./movies-slider.component.sass']
})
export class MoviesSliderComponent implements OnInit {
  @Input() limit!: number;
  movies$ = this.db.getMovies(this.limit);

  constructor(
    private db: DatabaseService,
  ) { }

  ngOnInit() {
  }
}
