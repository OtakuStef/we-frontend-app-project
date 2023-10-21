import routing from "./routing";
import Toaster from "./toaster";
import AppURLs from "../Models/AppURLs";

export default class LoginformHandler{
  private readonly signInButton;
  private readonly signUpButton;
  private readonly registerButton;

  constructor() {
    this.signInButton = document.getElementById('signInButton');
    this.signUpButton = document.getElementById('signUpButton');
    this.registerButton = document.getElementById('registerButton');
  }

  initialize() {
    this.addButtonEvents()
  }

  public addButtonEvents(){

    this.signInButton?.addEventListener('click', () => {
      submitLogin();
    })
    this.signUpButton?.addEventListener('click',  e => {
      submitSignUp(e);
    })
    this.registerButton?.addEventListener('click',  e => {
      generateUser(e);
    })
  }

}

function submitLogin() {
  if (isFormValid()){
    console.log("logged in")
    Toaster.toasterEvent("Logged in", 4000)
    routing.navigateTo(AppURLs.pileofshame);
  }
}

function submitSignUp(e : MouseEvent) {
  e.preventDefault();
  routing.navigateTo(AppURLs.signup);
}

function generateUser(e : MouseEvent) {
  if (isFormValid()){
    e.preventDefault();
    Toaster.toasterEvent("User created", 4000)
    routing.navigateTo(AppURLs.login);
  }
}

function isFormValid() : boolean{
  console.log(document.body)
  return document.querySelectorAll(".error-text").length === 0;
}