import routing from "./routing";

export default class HomeDashboardRouter{
  private readonly gameListCard;
  private readonly pileOfShameCard;
  private readonly userCard;

  constructor() {
    this.gameListCard = document.getElementById('gameListCard');
    this.pileOfShameCard = document.getElementById('pileOfShameCard');
    this.userCard = document.getElementById('userCard');
  }

  initialize() {
    this.addCardEvents()
  }

  public addCardEvents(){

    this.gameListCard?.addEventListener('click', e => {
      setRouter(e,"/gamelist");
    })
    this.pileOfShameCard?.addEventListener('click',  e => {
      setRouter(e,"/pileofshame");
    })
    this.userCard?.addEventListener('click',  e => {
      setRouter(e,"user/login");
    })
  }

}

function setRouter(e : MouseEvent, path : string) {
  e.preventDefault();
  routing.navigateTo(path);
}