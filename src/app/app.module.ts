import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import appRoutes from './app.router';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FiltersComponent } from './home/filters/filters.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CardComponent } from './common/card/card.component';
import { ChipsComponent } from './common/chips/chips.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FiltersComponent,
    PagenotfoundComponent,
    CardComponent,
    ChipsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
