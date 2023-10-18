import {GameAPIResponse, GameItem, Genre, Platforms} from "../Models/GameItem";
import {HtmlElementCreator} from "./html-element-creator";

export class GameCardCreator{
  static createGameList(gameData: GameAPIResponse) {
    const gameDiv = HtmlElementCreator.createDivElement(["card-container", "row"]);
    const games: GameItem[] = gameData.results;

    for (let gameIndex in games) {
      let game = games[gameIndex];
      gameDiv.appendChild(this.createGameCard(game))
    }

    document.querySelector("#gameListDiv").replaceChildren(gameDiv);
  }

  public static createGameCard = (gameItem : GameItem) => {
    const headerDiv = HtmlElementCreator.createDivElement(["col-md-4", "px-0"]);
    const gameCard = HtmlElementCreator.createDivElement(["card", "m-2"]);
    const gameImage = HtmlElementCreator.createImageElement("card-img-top",gameItem.background_image,"Picture of the game " + gameItem.name);
    const cardBody = HtmlElementCreator.createDivElement(["card-body"]);
    const gameTitle = HtmlElementCreator.createTextElement("h5", "cardTitle", gameItem.name);
    const metaScore = HtmlElementCreator.createTextElement("p", "card-text", "Metacritic Score: " + this.verifyString(gameItem.metacritic));
    const genres = HtmlElementCreator.createTextElement("p", "card-text", "Genres: " + this.extractGenres(gameItem.genres));
    const platforms = HtmlElementCreator.createTextElement("p", "card-text", "Platforms: " + this.extractPlatforms(gameItem.platforms));
    const favButton = HtmlElementCreator.createButtonElement(["btn-theme"], "favorite", "pileOfShame");


    favButton.addEventListener("click", e => {
      e.preventDefault()
      if(favButton.classList.contains("favourite")){
        favButton.classList.remove("favourite");
        favButton.replaceChildren()
        this.removeFromPileOfShame(gameItem)
      }else {
        favButton.classList.add("favourite");
        this.addToPileOfShame(gameItem);
      }
    })

    headerDiv.appendChild(gameCard);
    gameCard.appendChild(gameImage);
    gameCard.appendChild(cardBody);
    cardBody.appendChild(gameTitle);
    cardBody.appendChild(metaScore);
    cardBody.appendChild(genres);
    cardBody.appendChild(platforms);
    cardBody.appendChild(favButton);

    return headerDiv;
  }

  private static addToPileOfShame(gameItem: GameItem) {
    console.log("Item added: " + gameItem.name)
  }

  private static removeFromPileOfShame(gameItem: GameItem){
    console.log("Item removed: " + gameItem.name)
  }

  private static verifyString(input) : string{
    if (input === null){
      return "missing :(";
    }else {
      return  input.toString();
    }
  }

  private static extractGenres(genres : Genre[]) : string {
    let genreString = "";
    for(let genreIndex in genres){
      genreString += genres[genreIndex].name + "  ";
    }
    return genreString;
  }

  private static extractPlatforms(platforms : Platforms[]) : string {
    let platformString = "";
    for(let platformsIndex in platforms){
      platformString += platforms[platformsIndex].platform.name + "  "
    }
    return platformString;
  }

}