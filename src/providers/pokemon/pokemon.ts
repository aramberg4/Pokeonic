import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

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
    this.url = 'http://localhost:8100/api/';
  }

  getPokemon(){
    return this.http.get(this.url+'pokemon/').pipe(
      mergeMap((res:any) => of({next: res.next, pokemon: res.results}))
    );
  }
}
