import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputCurrencyComponent } from './input-currency/input-currency.component';
import { OutputCurrencyComponent } from './output-currency/output-currency.component';

@NgModule({
  declarations: [
    AppComponent,
    InputCurrencyComponent,
    OutputCurrencyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
