import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { AppComponent } from './app.component';
import { PagenotFoundComponent } from './pagenot-found/pagenot-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PagenotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    PagesModule,
    AuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
