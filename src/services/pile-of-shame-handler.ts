import {GameItem} from "../Models/GameItem";
import {HtmlElementCreator} from "./html-element-creator";
import {GameCardCreator} from "./game-card-creator";

export class PileOfShameHandler {

  static getPileOfShame() : GameItem[]{
    return JSON.parse(localStorage.getItem("pileOfShameObjects") || "[]");
  }

  static storeNewItem(gameItem : GameItem){
    const newPileOfShame = this.getPileOfShame().push(gameItem);
    console.log("New Pile Of Shame Array: " + newPileOfShame);
    localStorage.setItem('pileOfShameObjects', JSON.stringify(newPileOfShame))
  }

  static removeItem(gameItem : GameItem){
    const storedPileOfShame : GameItem[] = this.getPileOfShame();
    const itemToRemoveIndex = storedPileOfShame.indexOf(gameItem);
    if (itemToRemoveIndex !== -1){
      const newPileOfShame = storedPileOfShame.splice(storedPileOfShame.indexOf(gameItem), 1);
      localStorage.setItem('pileOfShameObjects', JSON.stringify(newPileOfShame));
    }

  }

  static itemExists(gameItem : GameItem){

  }

  static renderPileOfShame(){
    const pileOfShameDiv = HtmlElementCreator.createDivElement(["card-container", "row"]);
    const pileOfShameItems : GameItem[] = this.getPileOfShame();

    for (let gameIndex in pileOfShameItems) {
      let game = pileOfShameItems[gameIndex];
      pileOfShameDiv.appendChild(GameCardCreator.createGameCard(game))
    }

    document.querySelector("#pileOfShameDiv").replaceChildren(pileOfShameDiv);
  }
}