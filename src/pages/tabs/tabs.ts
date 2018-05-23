import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { Pokedex } from '../pokedex/pokedex';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Pokedex;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
