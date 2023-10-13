import abstractView from "./abstract-view";

export default class extends abstractView {
  constructor() {
    super();
    this.setTitle("Home")
  }

  async getHtml() {
    return `
      <p> Home works </p>
      `;

  }

}