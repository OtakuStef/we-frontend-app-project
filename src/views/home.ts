import abstractView from "./abstract-view";
import gameListImageUrl from "./img/game-list-image.jpg";
import pileOfShameImageUrl from "./img/pile-of-shame-image.jpg";
import userAccountImageUrl from "./img/user-account-image.jpg";

export default class extends abstractView {
  constructor() {
    super();
    this.setTitle("Home")
  }

  async getHtml() {
    return `
      <div class="container align-items-center justify-content-center text-center p-2 mt-2">
        <h1>WELCOME!</h1>
      </div>
      <div class="container align-items-center">
        <div class="card-container row">
          <div id="gameListCard" class="btn col-md-4 px-0">
            <div class="card m-2">
              <img src=${gameListImageUrl} alt="chessboard showing a pawn with a crown">
              <div class="card-body">
                <h1 class="card-title home-title">Game List</h1>
                <hr class="hr" />
                <p class="card-text home-text">Show all the cool games ranked by their Metacritics Score! </p>
              </div>
            </div>
          </div>
          <div id="pileOfShameCard" class="btn col-md-4 px-0">
            <div class="card m-2">
              <img src=${pileOfShameImageUrl} alt="pink and blue xbox controller">
              <div class="card-body">
                <h1 class="card-title home-title">Pile Of Shame</h1>
                <hr class="hr" />
                <p class="card-text home-text">WHAT? You haven't played THAT many games? GO GO GO - start playing! </p>
              </div>
            </div>
          </div>
          <div id="userCard" class="btn col-md-4 px-0">
            <div class="card m-2">
              <img src=${userAccountImageUrl} alt="colleagues working on a project with pen and paper">
              <div class="card-body">
                <h1 class="card-title home-title">My User</h1>
                <hr class="hr" />
                <p class="card-text home-text">Create an account or login to your existing account to share the pain with your friends!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      `;

  }

}