import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ConvertCurrencyService } from 'src/service/convert-currency.service';
import { Currencies } from '../Currencies';
import { Currency } from '../Currency';

@Component({
  selector: 'app-output-currency',
  templateUrl: './output-currency.component.html',
  styleUrls: ['./output-currency.component.css']
})
export class OutputCurrencyComponent implements OnInit , OnChanges {

  @Input() currencyData! : Currency ;
  outCurrencyName = Currencies.Euro;
  currencyValue = 1;
  constructor(private convertor : ConvertCurrencyService) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    let newInputCurrency = changes['currencyData'].currentValue.name as Currencies;
    console.log(newInputCurrency);
    this.currencyValue = this.convertor.convert(newInputCurrency, changes['currencyData'].currentValue.value , this.outCurrencyName);
  }

  currencyChange(currency : string){
     this.outCurrencyName = currency as Currencies;
     console.log(this.outCurrencyName);
     this.currencyValue = this.convertor.convert(this.currencyData.name , this.currencyData.value , this.outCurrencyName);
  }
}
