import abstractView from "./abstract-view";

export default class extends abstractView {
  constructor() {
    super();
    this.setTitle("Games")
  }

  async getHtml() {
    return `
      <p> Game List works </p>
    `;

  }

}