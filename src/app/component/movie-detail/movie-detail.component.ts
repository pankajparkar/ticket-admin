import { Movie } from './../../interface/movie';
import { DomSanitizer } from '@angular/platform-browser';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DatabaseService } from './../../service/database.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.sass']
})
export class MovieDetailComponent implements OnInit {
  movieId = +this.route.snapshot.paramMap.get('id')!;
  movie$ = this.db.getMovie(this.movieId);
  showAllTimes = false;
  modalRef!: BsModalRef;

  constructor(
    private route: ActivatedRoute,
    private db: DatabaseService,
    private modalService: BsModalService,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  // show all showtimes
  showAllShowtimes(): void {
    this.showAllTimes = true;
  }

  // hide all showtimes
  hideAllShowtimes(): void {
    this.showAllTimes = false;
  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.modalRef.setClass('modal-lg');
  }

  getPreviewUrl(trailer: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.getEmbedUrl(trailer));
  }

  getEmbedUrl(url: string) {
    return url.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/');
  }
}
