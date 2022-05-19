import { InMemoryDataService } from './service/in-memory-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { HomeComponent } from './components/home/home.component';
import { JoinPipe } from './pipe/join.pipe';
import { MinutePipe } from './pipe/minute.pipe';
import { DayPipe } from './pipe/day.pipe';
import { DatabaseService } from './service/database.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SafePipe } from './pipe/safe.pipe';

import { MoviesSliderComponent } from './components/movies-slider/movies-slider.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CollectionComponent } from './components/collection/collection.component';
import { ManageShowtimesComponent } from './components/manage-showtimes/manage-showtimes.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { VerticalBarChartComponent } from './components/charts/vertical-bar-chart/vertical-bar-chart.component';
import { NumberChartComponent } from './components/charts/number-chart/number-chart.component';
import { SharedModule } from './shared/shared.module';

// shared removed
// import { MovieDetailsCardComponent } from './shared/movie-details-card/movie-details-card.component';
// import { GoldenTextComponent } from './shared/golden-text/golden-text.component';
// import { MoviePreviewCardComponent } from './shared/movie-preview-card/movie-preview-card.component';
// import { MovieSearchComponent } from './shared/movie-search/movie-search.component';
// import { MoviesGridComponent } from './shared/movies-grid/movies-grid.component';
// import { MovieDetailComponent } from './shared/movie-detail/movie-detail.component';
// import { ShowtimesComponent } from './shared/showtimes/showtimes.component';
// import { NavbarComponent } from './shared/navbar/navbar.component';
// import { FooterComponent } from './shared/footer/footer.component';
// import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    HomeComponent,
    JoinPipe,
    MinutePipe,
    DayPipe,
    MoviesListComponent,
    SafePipe,
    MoviesSliderComponent,
    DashboardComponent,
    CollectionComponent,
    ManageShowtimesComponent,
    VerticalBarChartComponent,
    NumberChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    SharedModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    CarouselModule.forRoot(),
    NgxChartsModule,
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent],
})
export class AppModule { }
