import {GameAPIResponse, GameItem} from "../Models/GameItem";

export default class GamesFetcher {
  readonly GET_GAMES_URL : string;
  readonly API_KEY : string;
  private previousPageURL : string;
  private nextPageURL : string;

  constructor() {
    this.GET_GAMES_URL = "https://api.rawg.io/api/games";
    this.API_KEY = "?key=" + import.meta.env.VITE_RAWG_API_KEY;
  }


  async initialize() {
    const gameDiv = createDivElement("container");
    const gameData: GameAPIResponse = await this.getGameList();
    console.log(gameData);
    this.previousPageURL = gameData.previousPage;
    this.nextPageURL = gameData.nextPage;
    const games : GameItem[] = gameData.results;

    for (let gameIndex in games){
      let game = games[gameIndex];
      gameDiv.appendChild(this.createGameCard(game))
    }

    document.querySelector("#gameListDiv").appendChild(gameDiv);
  }

  getGameList = async () => {
    try {
      const dates : string = "2023-01-01,2023-12-31";
      const ordering : string = "-metacritic";
      const page_size : number = 10;

      const parameterGameList : string = this.API_KEY
        + "&dates=" + dates
        + "&ordering=" + ordering
        + "&page_size=" + page_size;

      const response = await fetch(this.GET_GAMES_URL + parameterGameList);
      return await handleResponseError(response);
    }catch (error){
      console.log("Error while fetching and handling RAWG-API: " + error);
    }
  }

  createGameCard = (gameItem : GameItem) => {
    const gameCard = createDivElement("card");
    const gameImage = createImageElement("card-img-top",gameItem.background_image,"Picture of the game " + gameItem.name);
    const cardBody = createDivElement("card-body");
    const gameTitle = createTextElement("h5", "cardTitle", gameItem.name);
    const metaScore = createTextElement("p", "card-text", gameItem.metacritic.toString());
    const favLink = createButtonElement("btn-theme", "#");

    gameCard.appendChild(gameImage);
    gameCard.appendChild(cardBody);
    cardBody.appendChild(gameTitle);
    cardBody.appendChild(metaScore);
    cardBody.appendChild(favLink);

    return gameCard;
  }


}

function handleResponseError(response){
  if (!response.ok) {
    throw new Error(`Fetch Error: ${response.status} - ${response.statusText}`);
  }
  return response.json();
}

function createDivElement(divClass : string){
  const divElement = document.createElement("div");
  divElement.classList.add(divClass);
  return divElement;
}

function createImageElement(imgClass : string, source : string, altText : string){
  const imageElement = document.createElement("img");
  imageElement.classList.add(imgClass);
  imageElement.src = source;
  imageElement.alt = altText;
  return imageElement;
}

function createTextElement(textType : string, textClass : string, text : string){
  const textElement = document.createElement(textType);
  textElement.classList.add(textClass);
  textElement.textContent = text;
  return textElement;
}

function createButtonElement(buttonTheme : string, link : string){
  const buttonElement = document.createElement("a");
  buttonElement.classList.add("btn");
  buttonElement.classList.add(buttonTheme);
  buttonElement.href = link;
  return buttonElement;
}

