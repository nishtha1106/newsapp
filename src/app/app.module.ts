import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { NewsSearchComponent } from './news-search/news-search.component';
import { NewsListComponent } from './news-list/news-list.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { NewsService } from './news.service';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NewsSearchComponent,
    NewsListComponent,
    FavoriteComponent,
    HomeComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([ 
    { path: 'news', component: NewsComponent },  
    { path: 'home',component: HomeComponent },
    { path: 'favorite',component: FavoriteComponent },
    { path: 'search',component: NewsComponent },
    { path: 'list',component: NewsListComponent },
    { path: 'registration',component: RegistrationComponent },
    { path:'',redirectTo:'/home', pathMatch:'full'}
    ])
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
