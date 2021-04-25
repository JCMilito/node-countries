import axios from "axios";
import Country from "../model/Country";

export default async function research(search: string): Promise<Country[]> {
  let response = await axios.get(
    "https://restcountries.eu/rest/v2/name/" + search);
  let data = response.data;
  let countries: Country[] = [];
  for (let country of data) {
    let name = country.name;
    let capital = country.capital;
    let region = country.region;
    let flag = country.flag;
    countries.push(new Country(name, capital, region, flag));
  }
  return countries;
}
