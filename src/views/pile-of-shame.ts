import abstractView from "./abstract-view";

export default class extends abstractView {
  constructor() {
    super();
    this.setTitle("Pile Of Shame")
  }

  async getHtml() {
    return `
      <p> Pile of Shame works </p>
    `;

  }

}