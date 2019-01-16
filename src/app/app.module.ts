import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTMLEscapeUnescapeModule } from 'html-escape-unescape'


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HTMLEscapeUnescapeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
