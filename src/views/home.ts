import abstractView from "./abstract-view";

export default class extends abstractView {
  constructor() {
    super();
    this.setTitle("Home")
  }

  async getHtml() {
    return `
      <div class="container align-items-center">
        <h1>WELCOME!</h1>
        <div class="card-container row">
          <div class="col-md-4 px-0">
            <div class="card m-2">
              <i class="material-symbols-outlined">favorite</i>
              <div class="card-body">
                <h5 class="card-title">Game List</h5>
                <p class="card-text">Show all the cool games ranked by their Metacritics Score! </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 px-0">
            <div class="card m-2">
              <i class="material-symbols-outlined">favorite</i>
              <div class="card-body">
                <h5 class="card-title">Game List</h5>
                <p class="card-text">Show all the cool games ranked by their Metacritics Score! </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 px-0">
            <div class="card m-2">
              <i class="material-symbols-outlined">favorite</i>
              <div class="card-body">
                <h5 class="card-title">Game List</h5>
                <p class="card-text">Show all the cool games ranked by their Metacritics Score! </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      `;

  }

}