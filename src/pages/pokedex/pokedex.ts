import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PokemonProvider} from '../../providers/pokemon/pokemon';

@Component({
  selector: 'page-pokedex',
  templateUrl: 'pokedex.html'
})
export class Pokedex {
  


  constructor(public navCtrl: NavController, private pokemonProvider:PokemonProvider) {}\

  ionViewWillEnter(){
 
    this.pokemonProvider.getPokemons()
      .subscribe(pokemon => {
        console.log(pokemon);
      });
  }
  
}
