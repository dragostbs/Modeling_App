import * as navigation from "./navigation.js";
import * as switchElements from "./switch.js";
import * as scrollElements from "./scroll.js";
import * as changeElements from "./change.js";

class App {
  constructor() {
    this._navigationEffect();
    this._scrollEffect();
    this._switchElements();
    this._changeElements();
  }

  _navigationEffect() {
    navigation.navigate();
  }

  _scrollEffect() {
    scrollElements.scroll();
  }

  _switchElements() {
    switchElements.switchEl();
  }

  _changeElements() {
    changeElements.changeEl();
  }
}

const app = new App();
