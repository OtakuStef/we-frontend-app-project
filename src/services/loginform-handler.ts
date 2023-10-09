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

    this.signInButton?.addEventListener('click', function (){
      submitLogin();
    })
    this.signUpButton?.addEventListener('click', function (){
      submitSignUp();
    })
    this.registerButton?.addEventListener('click', function (){
      generateUser();
    })
  }

}

function submitLogin() {
  console.log("validation check: " + isFormValid())
  if (isFormValid()){
    console.log("signin")
  }
}

function submitSignUp() {
  console.log("signup")
  window.location.href = "/user/signup";
}

function generateUser() {
  if (isFormValid()){
    console.log("register")
  }
}

function isFormValid() : boolean{
  console.log(document.body)
  return document.querySelectorAll(".error-text").length === 0;
}