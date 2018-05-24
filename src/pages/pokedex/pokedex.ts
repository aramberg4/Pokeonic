import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { PokedexState } from './state/pokedex.reducer';
import { PokedexActionTypes } from './state/pokedex.actions';

@Component({
  selector: 'page-pokedex',
  templateUrl: 'pokedex.html'
})
export class Pokedex {
  


  constructor(
    private store: Store<PokedexState>,) {}

  ionViewWillEnter(){
    
    this.store.dispatch({type: PokedexActionTypes.QUERY});
  }
  
}
