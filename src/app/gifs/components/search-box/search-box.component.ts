import { Component } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  template: `
    <h5>Buscar:</h5>
    <input type = "text"
      class="form-control"
      placeholder="Search Gifs..">
  `
})

export class SearchBoxComponent {
  constructor() { }

}
