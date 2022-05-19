import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/service/database.service';

@Component({
  selector: 'bmc-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.sass']
})
export class CollectionComponent implements OnInit {

  movies$ = this.db.getMovies(100);

  constructor(
    private db: DatabaseService,
  ) { }

  ngOnInit(): void {
  }

}
