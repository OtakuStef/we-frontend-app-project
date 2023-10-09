import abstractView from "./abstract-view";
import "../style.scss"

export default class extends abstractView {

  constructor() {
    super();
    this.setTitle("Users");
  }

  async getHtml() {

    return `
<p>user data</p>
<!--      <section id="login" class="vh-100">-->
<!--        <div class="container col-md-5 col-lg-6 p-5">-->
<!--          <div class="row d-flex align-items-center justify-content-center h-100">-->
<!--            <div class="col-md-8 col-lg-7 col-xl-6">-->
<!--              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"-->
<!--                class="img-fluid" alt="Phone image">-->
<!--            </div>-->
<!--            <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">-->
<!--              <form class="form"> -->
<!--                &lt;!&ndash; Email input &ndash;&gt;-->
<!--                <div class="form-outline mb-4">-->
<!--                  <label class="form-label" for="emailLogin">Email address*</label>-->
<!--                  <input type="email" id="emailLogin" class="form-control form-control-lg mandatory" itemref="emailLoginError" />-->
<!--                  <div id="emailLoginError" class="form-text error-text" hidden>Please enter a valid mail-address.</div>-->
<!--                </div>-->
<!--      -->
<!--                &lt;!&ndash; Password input &ndash;&gt;-->
<!--                <div class="form-outline mb-4">-->
<!--                  <label class="form-label" for="passwordLogin">Password*</label>-->
<!--                  <input type="password" id="passwordLogin" class="form-control form-control-lg mandatory" itemref="passwordLoginError" />-->
<!--                  <div id="passwordLoginError" class="form-text error-text" hidden>Please enter your password.</div>-->
<!--                </div>-->
<!--      -->
<!--                <div class="d-flex justify-content-around align-items-center mb-4">-->
<!--                </div>-->
<!--      -->
<!--                &lt;!&ndash; Submit button &ndash;&gt;-->
<!--                <button type="submit" id="signInButton" class="btn btn-theme btn-lg col-12">Sign in</button>-->
<!--      -->
<!--                <div class="divider d-flex align-items-center my-4">-->
<!--                  <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>-->
<!--                </div>-->
<!--                -->
<!--                <button type="button" id="signUpButton" class="btn btn-theme btn-lg col-12">Sign up</button>-->
<!--      -->
<!--              </form>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </section>-->
<!--      <section id="signup" hidden>-->
<!--      <div class="container col-md-5 col-lg-6">-->
<!--        <div class="mt-3">-->
<!--          <h4 class="mb-3 fw-semibold">Sign-Up</h4>-->
<!--          <form class="form">-->
<!--            <div class="row mb-3">-->
<!--              <div class="col">-->
<!--                <label for="firstname" class="form-label">First Name *</label>-->
<!--                <input type="text" class="form-control mandatory" id="firstname" itemref="nameError">-->
<!--              </div>-->
<!--              <div class="col">-->
<!--                <label for="lastname" class="form-label">Last Name *</label>-->
<!--                <input type="text" class="form-control mandatory" id="lastname" itemref="nameError">-->
<!--              </div>-->
<!--              <div id="nameError" class="form-text error-text" hidden>Please enter your first and family name.</div>-->
<!--            </div>-->
<!--            <div class="mb-3">-->
<!--              <label for="emailAddress" class="form-label">Email address *</label>-->
<!--              <input type="email" class="form-control mandatory" id="emailAddress" itemref="emailError">-->
<!--              <div id="emailError" class="form-text error-text" hidden>Please enter a valid mail-address.</div>-->
<!--            </div>-->
<!--            <div class="mb-3">-->
<!--              <label for="userAccountNumber" class="form-label">User Account Number (Optional)</label>-->
<!--              <input type="number" class="form-control" id="userAccountNumber">-->
<!--            </div>-->
<!--            <div class="mb-3">-->
<!--              <label for="password" class="form-label">Password *</label>-->
<!--              <input type="password" minlength="8" class="form-control mandatory" id="password" itemref="passwordError">-->
<!--              <div id="passwordError" class="form-text error-text" hidden>Please enter a valid password with at least 8 characters.</div>-->
<!--            </div>-->
<!--            <div class="mb-3">-->
<!--              <label for="password" class="form-label">Password Confirmation*</label>-->
<!--              <input type="password" class="form-control mandatory" id="passwordConfirmation" itemref="passwordConfirmationError">-->
<!--              <div id="passwordConfirmationError" class="form-text error-text" hidden>Please enter the same password as above.</div>-->
<!--            </div>-->
<!--            <button type="submit" id="registerButton" class="btn btn-theme">Submit</button>-->
<!--          </form>-->
<!--        </div>-->
<!--      </div>-->
<!--      </section>-->
    `;

  }

}
