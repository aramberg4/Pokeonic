import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { PokedexState } from './state/pokedex.reducer';
import { PokedexActionTypes } from './state/pokedex.actions';
import { PokedexFacade } from './state/pokedex.facade';

@Component({
  selector: 'page-pokedex',
  templateUrl: 'pokedex.html'
})
export class Pokedex {

  // This is an observable that emits the pokemon in the store
  // The $ is just convention for Observables
  pokemon$ = this.pokedexFacade.pokemon$;

  constructor(
    private pokedexFacade: PokedexFacade,
    private store: Store<PokedexState>,) {}

  ionViewWillEnter(){
    
    this.store.dispatch({type: PokedexActionTypes.QUERY});
  }
  
}
