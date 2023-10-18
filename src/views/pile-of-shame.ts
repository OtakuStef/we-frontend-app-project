import abstractView from "./abstract-view";

export default class extends abstractView {
  constructor() {
    super();
    this.setTitle("Pile Of Shame")
  }

  async getHtml() {
    return `
      <div class="container align-items-center justify-content-center text-center p-2">
        <h1>Your Pile Of Shame - Shame on You!</h1> 
      </div>
      <div id="pileOfShameDiv" class="container align-items-center"></div>
    `;

  }

}