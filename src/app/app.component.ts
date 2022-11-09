import { Component } from '@angular/core';
import { Currencies } from './Currencies';
import { Currency } from './Currency';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currencycalculator';
  currencyInfo : Currency = new Currency(Currencies.Euro , 1);

  currencyData(currencyData : Currency){
      this.currencyInfo = new Currency(currencyData.name , currencyData.value);
  }
}
