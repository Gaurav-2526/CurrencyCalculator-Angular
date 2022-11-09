import { Currencies } from "./Currencies";

export class Currency {
    name : Currencies;
    value : number;
    constructor(name : Currencies , value : number){
        this.name = name;
        this.value = value;
    }
}