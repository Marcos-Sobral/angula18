// imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FooterComponent } from './footer.component';

// @NgModule decorator with its metadata
@NgModule({
  declarations: [FooterComponent],
  imports: [],
  providers: [],
  exports: [FooterComponent]
})
export class FooterModule {}