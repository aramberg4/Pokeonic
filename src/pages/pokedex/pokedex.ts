import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PokemonProvider} from '../../providers/pokemon/pokemon';

@Component({
  selector: 'page-pokedex',
  templateUrl: 'pokedex.html'
})
export class Pokedex {
  pokemon:any;
  pokemonId:string;
  constructor(public navCtrl: NavController, private pokemonProvider:PokemonProvider) {

  }
  ionViewWillEnter(){
    this.pokemonId = '1';
    this.pokemonProvider.getPokemon(this.pokemonId)
      .subscribe(pokemon => {
        console.log(pokemon);
      });
  }
  
}
