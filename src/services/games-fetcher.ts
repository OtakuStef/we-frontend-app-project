import {GameAPIResponse} from "../Models/GameItem";
import {HtmlElementCreator} from "./html-element-creator";
import {GameCardCreator} from "./game-card-creator";

export default class GamesFetcher {
  readonly GET_GAMES_URL: string;
  readonly API_KEY: string;
  private previousPageURL: string;
  private nextPageURL: string;
  private pageCount: number = 1;

  constructor() {
    this.GET_GAMES_URL = "https://api.rawg.io/api/games";
    this.API_KEY = "?key=" + import.meta.env.VITE_RAWG_API_KEY;
  }

  async initialize() {
    this.initializePageNav();
    await this.initializeGameList();
  }

  initializePageNav() {
    const navDiv = HtmlElementCreator.createDivElement(["nav-container", "row"]);
    const buttonDiv = HtmlElementCreator.createDivElement(["col", "px-0"]);
    const pageNumber = HtmlElementCreator.createTextButtonElement("btn-theme", this.pageCount.toString(), "pageCounter")
    const prevButton = HtmlElementCreator.createButtonElement(["btn-theme", "previous"], "arrow_back", "previousButton");
    const nextButton = HtmlElementCreator.createButtonElement(["btn-theme", "forward"], "arrow_forward", "nextButton");

    navDiv.appendChild(buttonDiv);
    buttonDiv.appendChild(prevButton);
    buttonDiv.appendChild(pageNumber);
    buttonDiv.appendChild(nextButton);

    document.querySelector("#paginationNav").appendChild(navDiv);

    this.initializePageNavEvents();
  }

  initializePageNavEvents() {
    let prevButton = document.querySelector(".previous");
    let nextButton = document.querySelector(".forward");

    prevButton?.addEventListener("click", () => {
      this.changeGameList("prev");
    })

    nextButton?.addEventListener("click", () => {
      this.changeGameList("next");
    })

  }

  async initializeGameList() {
    const gameData: GameAPIResponse = await this.getInitGameList();
    this.updatePageURLs(gameData);
    GameCardCreator.createGameList(gameData);
  }

  async changeGameList(buttonEvent: string) {
    let pageCounter: HTMLAnchorElement = document.querySelector(".pageCounter");
    let pageUrl: string;
    let newPageCount: number;

    if (buttonEvent === "prev" && this.previousPageURL != null) {
      pageUrl = this.previousPageURL;
      newPageCount = this.pageCount - 1;
    } else if (buttonEvent === "next" && this.nextPageURL != null) {
      pageUrl = this.nextPageURL;
      newPageCount = this.pageCount + 1;
    } else {
      return;
    }

    const gameData: GameAPIResponse = await this.getGameList(pageUrl);
    this.updatePageURLs(gameData);
    GameCardCreator.createGameList(gameData);

    this.pageCount = newPageCount;
    pageCounter.text = newPageCount.toString();
  }

  updatePageURLs(gameData : GameAPIResponse){
    this.previousPageURL = gameData.previous;
    this.nextPageURL = gameData.next;
  }


  getInitGameList = async () => {
    try {
      const dates: string = "2023-01-01,2023-12-31";
      const ordering: string = "-metacritic";
      const page_size: number = 12;

      const parameterGameList: string = this.API_KEY
        + "&dates=" + dates
        + "&ordering=" + ordering
        + "&page_size=" + page_size;

      const response = await fetch(this.GET_GAMES_URL + parameterGameList);
      return await handleResponseError(response);
    } catch (error) {
      console.log("Error while fetching and handling RAWG-API: " + error);
    }
  }

  getGameList = async (pageURL: string) => {
    try {
      const response = await fetch(pageURL);
      return await handleResponseError(response);
    } catch (error) {
      console.log("Error while fetching and handling RAWG-API: " + error);
    }
  }
}

function handleResponseError(response){
  if (!response.ok) {
    throw new Error(`Fetch Error: ${response.status} - ${response.statusText}`);
  }
  return response.json();
}


