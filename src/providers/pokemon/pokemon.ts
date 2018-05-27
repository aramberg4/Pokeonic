import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { map } from 'rxjs/operators';

/*
  Generated class for the PokemonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PokemonProvider {
  url;

  constructor(public http: HttpClient) {
    console.log('Hello PokemonProvider Provider');
    this.url = '/api';
  }

  getPokemon(pokemonId){
<<<<<<< HEAD
    return this.http.get(this.url+'/pokemon/'+pokemonId+'.json')
      .map(res => res.toString());
=======
    return this.http.get(this.url+'pokemon/'+pokemonId+'.json');
>>>>>>> d16d93571ecf42eff63d0fb5e38e832fe03f4c23
  }
}
