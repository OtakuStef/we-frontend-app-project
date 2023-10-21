import {GameItem} from "../Models/GameItem";
import {HtmlElementCreator} from "./html-element-creator";
import {GameCardCreator} from "./game-card-creator";

export class PileOfShameHandler {

  initialize(){
    PileOfShameHandler.renderPileOfShame();
  }

  static getPileOfShame() : GameItem[]{
    return JSON.parse(localStorage.getItem("pileOfShameObjects") || "[]");
  }

  static storeNewItem(gameItem : GameItem){
    const newPileOfShame = this.getPileOfShame();
    newPileOfShame.push(gameItem);
    localStorage.setItem('pileOfShameObjects', JSON.stringify(newPileOfShame))
  }

  static removeItem(gameItem : GameItem){
    const storedPileOfShame : GameItem[] = this.getPileOfShame();

    try {
      storedPileOfShame.splice(storedPileOfShame.indexOf(gameItem), 1);
      localStorage.setItem('pileOfShameObjects', JSON.stringify(storedPileOfShame));
    }catch (e){
      console.log("GameItem to delete not found")
    }
  }

  static itemExists(gameItem : GameItem){
    const storedPileOfShame : GameItem[] = this.getPileOfShame();
    return storedPileOfShame.find((storedGameItem : GameItem) => {
      return storedGameItem.name === gameItem.name;
    })
  }

  static renderPileOfShame(){
    const pileOfShameDiv = HtmlElementCreator.createDivElement(["card-container", "row"]);
    const pileOfShameItems : GameItem[] = this.getPileOfShame();

    for (let gameIndex in pileOfShameItems) {
      let game = pileOfShameItems[gameIndex];
      pileOfShameDiv.appendChild(GameCardCreator.createGameCard(game))
    }

    document.querySelector("#pileOfShameDiv")!.replaceChildren(pileOfShameDiv);
  }
}