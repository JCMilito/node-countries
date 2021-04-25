export default class Country {

    readonly name: string;
    readonly capital: string;
    readonly region: string;
    readonly flag: string;
    

    constructor(name: string, capital: string, region: string, flag: string) {
       this.name = name;
       this.capital = capital;
       this.region = region;
       this.flag = flag;
    }    
}