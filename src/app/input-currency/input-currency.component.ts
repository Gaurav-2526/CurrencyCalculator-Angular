import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Currencies } from '../Currencies';
import { Currency } from '../Currency';

@Component({
  selector: 'app-input-currency',
  templateUrl: './input-currency.component.html',
  styleUrls: ['./input-currency.component.css']
})
export class InputCurrencyComponent implements OnInit {

  currency = Currencies.Euro;
  currencyValue = 1;
  constructor() { }
  @Output() currencyData = new EventEmitter<Currency>();
  ngOnInit(): void {
  }

   onCurrencyChange(newCurrency : string){
    this.currency = newCurrency as Currencies;
    this.currencyData.emit(new Currency(this.currency,this.currencyValue));
   }

   onCurrencyValueChange(currencyValue : string){
    this.currencyValue = parseInt(currencyValue);
    this.currencyData.emit(new Currency(this.currency,this.currencyValue));
   }
}
