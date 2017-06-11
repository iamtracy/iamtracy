import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { WorkComponent } from './pages/work/work.component';
import { WordpressComponent } from './pages/wordpress/wordpress.component';
import { NodejsComponent } from './pages/nodejs/nodejs.component';
import { GeneralComponent } from './pages/general/general.component';



export const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'work', component: WorkComponent },
  { path: 'wordpress', component: WordpressComponent },
  { path: 'nodejs', component: NodejsComponent },
  { path: 'general', component: GeneralComponent },
];