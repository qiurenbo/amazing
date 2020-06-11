import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AmModule } from 'src/components/amazing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AmModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
