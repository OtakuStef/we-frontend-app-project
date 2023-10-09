import abstractView from "./abstract-view";
import "../style.scss"

export default class extends abstractView {

  constructor() {
    super();
    this.setTitle("User Login");
  }

  async getHtml() {

    return `
      <section id="login" class="vh-100">
        <div class="container col-md-5 col-lg-6 p-5">
          <div class="row d-flex align-items-center justify-content-center h-100">
            <div class="col-md-8 col-lg-7 col-xl-6">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                class="img-fluid" alt="Phone image">
            </div>
            <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form class="form"> 
                <!-- Email input -->
                <div class="form-outline mb-4">
                  <label class="form-label" for="emailLogin">Email address*</label>
                  <input type="email" id="emailLogin" class="form-control form-control-lg mandatory" itemref="emailLoginError" />
                  <div id="emailLoginError" class="form-text error-text" hidden>Please enter a valid mail-address.</div>
                </div>
      
                <!-- Password input -->
                <div class="form-outline mb-4">
                  <label class="form-label" for="passwordLogin">Password*</label>
                  <input type="password" id="passwordLogin" class="form-control form-control-lg mandatory" itemref="passwordLoginError" />
                  <div id="passwordLoginError" class="form-text error-text" hidden>Please enter your password.</div>
                </div>
      
                <div class="d-flex justify-content-around align-items-center mb-4">
                </div>
      
                <!-- Submit button -->
                <button type="submit" id="signInButton" class="btn btn-theme btn-lg col-12">Sign in</button>
      
                <div class="divider d-flex align-items-center my-4">
                  <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                </div>
                
                <button type="button" id="signUpButton" class="btn btn-theme btn-lg col-12">Sign up</button>
      
              </form>
            </div>
          </div>
        </div>
      </section>
    `;

  }

}
