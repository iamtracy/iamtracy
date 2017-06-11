import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app-routes';

import { GithubService } from './pages/github.service';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { WorkComponent } from './pages/work/work.component';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    WorkComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    RouterModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
