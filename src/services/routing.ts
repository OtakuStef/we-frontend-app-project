import home from "../views/home";
import gamelist from "../views/gamelist";
import pileOfShame from "../views/pile-of-shame";
import about from "../views/about";
import user from "../views/user";
import userLogin from "../views/user-login";
import userSignup from "../views/user-signup";
import FormValidator from "./form-validator";
import LoginformHandler from "./loginform-handler";
import GamesFetcher from "./games-fetcher";

export default class Routing{
  static navigateTo = url => {
    history.pushState(null, "", url);
    this.router();
  }

  static router = async () => {
    const routes = [
      { path: "/", view: home},
      { path: "/gamelist", view: gamelist},
      { path: "/pileofshame", view: pileOfShame},
      { path: "/about", view: about},
      { path: "/user", view: user},
      { path: "/user/login", view: userLogin},
      { path: "/user/signup", view: userSignup}
    ];

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
      return {
        route: route,
        isMatch: location.pathname === route.path
      }
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)

    if(!match){
      match = {
        route: routes[0],
        isMatch: true
      };
    }

    const view : any = new match.route.view;



    document.querySelector("#app").innerHTML = await view.getHtml();
    if (match.route.path === "/user/login" || match.route.path === "/user/signup"){
      addFormValidator();
      addFormButtonFunctions();
    }else if (match.route.path === "/gamelist"){
      initializeGameList();
    }

  };

}

function addFormValidator(){
  const validator = new FormValidator()
  validator.initialize()
  console.log("Form Validator added")
}

function addFormButtonFunctions(){
  const loginformHandler = new LoginformHandler();
  loginformHandler.initialize();
  console.log("Button Functions added")
}

function initializeGameList(){
  const gameFetcher = new GamesFetcher();
  gameFetcher.initialize();
}