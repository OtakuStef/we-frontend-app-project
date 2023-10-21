import {PileOfShameHandler} from "../services/pile-of-shame-handler";
import {GameItem} from "../Models/GameItem";
import {TestGameItem} from "./TestGameItem";
import 'jest-localstorage-mock';

describe('PileOfShameHandler', () => {
  beforeEach(() => {
    localStorage.clear()
  });

  it('should store a new item', () => {
    const gameItem: GameItem = { ...TestGameItem };

    PileOfShameHandler.storeNewItem(gameItem);

    const storedItems = PileOfShameHandler.getPileOfShame();
    expect(storedItems!).toContainEqual(gameItem);
  });

  it('should remove an item', () => {
    const gameItem: GameItem = { ...TestGameItem };

    PileOfShameHandler.storeNewItem(gameItem);
    PileOfShameHandler.removeItem(gameItem);

    const storedItems = PileOfShameHandler.getPileOfShame();
    expect(storedItems!).not.toContainEqual(gameItem);
  });

  it('should check if an item exists', () => {
    const gameItem: GameItem = { ...TestGameItem };

    PileOfShameHandler.storeNewItem(gameItem);

    const exists = PileOfShameHandler.itemExists(gameItem);
    expect(exists!).toBeTruthy();
  });
});