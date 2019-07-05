import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { SearchComponent } from './search/search.component';
import { MedicamentsListComponent } from './medicaments-list/medicaments-list.component';
import { MedicamentPageComponent } from './medicament-page/medicament-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    MainHeaderComponent,
    SearchComponent,
    MedicamentsListComponent,
    MedicamentPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
