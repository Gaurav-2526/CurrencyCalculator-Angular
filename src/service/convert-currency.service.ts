import { Injectable } from '@angular/core';
import { Currencies } from 'src/app/Currencies';

@Injectable({
  providedIn: 'root'
})
export class ConvertCurrencyService {

  constructor() { }

  convert(inpCurrency: Currencies, inpCurrValue: number, outCurrName: Currencies): number {
    if (inpCurrency === Currencies.Euro) {
      return this.euroToCurrency(inpCurrValue, outCurrName);
    }
    else if (inpCurrency === Currencies.IndianRupee) {
      return this.inrToCurrency(inpCurrValue, outCurrName);
    }
    else if (inpCurrency === Currencies.UsDollar) {
      return this.usdToCurrency(inpCurrValue, outCurrName);
    }
    else if (inpCurrency === Currencies.CanadianDollar) {
      return this.canadaToCurrency(inpCurrValue, outCurrName);
    }
    else if (inpCurrency === Currencies.JapaneseYen) {
      return this.yenToCurrency(inpCurrValue, outCurrName);
    }
    return inpCurrValue;
  }

  yenToCurrency(inpCurrValue: number, outCurrName: Currencies): number {
    switch (outCurrName) {
      case Currencies.IndianRupee:
        return inpCurrValue * 0.55835;
      case Currencies.Euro:
        return inpCurrValue * 0.00683;
      case Currencies.CanadianDollar:
        return inpCurrValue * 0.0092;
      case Currencies.UsDollar:
        return inpCurrValue * 0.00681;
    }
    return inpCurrValue;
  }

  canadaToCurrency(inpCurrValue: number, outCurrName: Currencies): number {
    switch (outCurrName) {
      case Currencies.IndianRupee:
        return inpCurrValue * 60.6907;
      case Currencies.Euro:
        return inpCurrValue * 0.74189;
      case Currencies.JapaneseYen:
        return inpCurrValue * 108.682;
      case Currencies.UsDollar:
        return inpCurrValue * 0.74048;
    }
    return inpCurrValue;
  }

  usdToCurrency(inpCurrValue: number, outCurrName: Currencies): number {
    switch (outCurrName) {
      case Currencies.IndianRupee:
        return inpCurrValue * 81.9616;
      case Currencies.Euro:
        return inpCurrValue * 1.00191;
      case Currencies.JapaneseYen:
        return inpCurrValue * 146.773;
      case Currencies.CanadianDollar:
        return inpCurrValue * 1.35026;
    }
    return inpCurrValue;
  }


  euroToCurrency(inpCurrValue: number, outCurrName: Currencies): number {
    switch (outCurrName) {
      case Currencies.UsDollar:
        return inpCurrValue * 0.99792;
      case Currencies.CanadianDollar:
        return inpCurrValue * 1.34746;
      case Currencies.JapaneseYen:
        return inpCurrValue * 1.79034;
      case Currencies.IndianRupee:
        return inpCurrValue * 81.7915;
    }
    return inpCurrValue;
  }
  inrToCurrency(inpCurrValue: number, outCurrName: Currencies): number {
    switch (outCurrName) {
      case Currencies.UsDollar:
        return inpCurrValue * 0.0122;
      case Currencies.Euro:
        return inpCurrValue * 0.01222;
      case Currencies.JapaneseYen:
        return inpCurrValue * 1.79034;
      case Currencies.CanadianDollar:
        return inpCurrValue * 0.01647;
    }
    return inpCurrValue;
  }
}
