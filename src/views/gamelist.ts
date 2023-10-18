import abstractView from "./abstract-view";

export default class extends abstractView {
  constructor() {
    super();
    this.setTitle("Games")
  }

  async getHtml() {
    return `
      <div id="paginationNav" class="container align-items-center justify-content-center text-center p-2">
        <h1>Games ranked by Metacritic Score</h1> 
      </div>
      <div id="gameListDiv" class="container align-items-center"></div>
    `;

  }



}
