import home from "./views/home";
import gamelist from "./views/gamelist";
import pileOfShame from "./views/pile-of-shame";
import about from "./views/about";
import user from "./views/user";
import "./style.scss";
import FormValidator from "./services/form-validator";

const navigateTo = url => {
  history.pushState(null, "", url);
  router();
}

const router = async () => {
  const routes = [
    { path: "/", view: home},
    { path: "/gamelist", view: gamelist},
    { path: "/pileofshame", view: pileOfShame},
    { path: "/about", view: about},
    { path: "/user", view: user}
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
  if (match.route.path === "/user"){
    addFormValidator()
  }

};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", e => {
    if (e.target instanceof Element){
      if (e.target.matches("[data-link]")){
        e.preventDefault();
        navigateTo(e.target.getAttribute("href"));
      }
    }
  })

  router()
});

const navItems = document.querySelectorAll(".nav-link");

for (let i = 0; i < navItems.length; i++){
  navItems[i].addEventListener("click", () => {
    Array.from(navItems, navItem => navItem.classList.remove('active'));
    navItems[i].classList.add("active");
  })
}

function addFormValidator(){
  const validator = new FormValidator()
  validator.initialize()
  console.log("Form Validator added")

}