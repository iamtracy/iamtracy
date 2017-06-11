import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app-routes';

import { GithubService } from './pages/github.service';

import { MaterializeModule } from 'angular2-materialize';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { WorkComponent } from './pages/work/work.component';
import { CardsComponent } from './cards/cards.component';
import { WordpressComponent } from './pages/wordpress/wordpress.component';
import { NodejsComponent } from './pages/nodejs/nodejs.component';
import { GeneralComponent } from './pages/general/general.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    WorkComponent,
    CardsComponent,
    WordpressComponent,
    NodejsComponent,
    GeneralComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    RouterModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
