import abstractView from "./abstract-view";

export default class extends abstractView {
  constructor() {
    super();
    this.setTitle("About")
  }

  async getHtml() {
    return `
      <p> About works </p>
    `;

  }

}