import "./style.scss";
import routing from "./services/routing";

window.addEventListener("popstate", routing.router);

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", e => {
    if (e.target instanceof Element){
      if (e.target.matches("[data-link]")){
        e.preventDefault();
        routing.navigateTo(e.target.getAttribute("href"));
      }
    }
  })

  routing.router()
});

const navItems = document.querySelectorAll(".nav-link");

for (let i = 0; i < navItems.length; i++){
  navItems[i].addEventListener("click", () => {
    Array.from(navItems, navItem => navItem.classList.remove('active'));
    navItems[i].classList.add("active");
  })
}