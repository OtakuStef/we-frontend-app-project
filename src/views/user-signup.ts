import abstractView from "./abstract-view";
import "../style.scss"

export default class extends abstractView {

  constructor() {
    super();
    this.setTitle("User SignUp");
  }

  async getHtml() {

    return `
      <section id="signup">
      <div class="container col-md-5 col-lg-6">
        <div class="mt-3">
          <h4 class="mb-3 fw-semibold">Sign-Up</h4>
          <form class="form">
            <div class="row mb-3">
              <div class="col">
                <label for="firstname" class="form-label">First Name *</label>
                <input type="text" class="form-control mandatory" id="firstname" itemref="nameError">
              </div>
              <div class="col">
                <label for="lastname" class="form-label">Last Name *</label>
                <input type="text" class="form-control mandatory" id="lastname" itemref="nameError">
              </div>
              <div id="nameError" class="form-text error-text" hidden>Please enter your first and family name.</div>
            </div>
            <div class="mb-3">
              <label for="emailAddress" class="form-label">Email address *</label>
              <input type="email" class="form-control mandatory" id="emailAddress" itemref="emailError">
              <div id="emailError" class="form-text error-text" hidden>Please enter a valid mail-address.</div>
            </div>
            <div class="mb-3">
              <label for="userAccountNumber" class="form-label">User Account Number (Optional)</label>
              <input type="number" class="form-control" id="userAccountNumber">
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password *</label>
              <input type="password" minlength="8" class="form-control mandatory" id="password" itemref="passwordError">
              <div id="passwordError" class="form-text error-text" hidden>Please enter a valid password with at least 8 characters.</div>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password Confirmation*</label>
              <input type="password" class="form-control mandatory" id="passwordConfirmation" itemref="passwordConfirmationError">
              <div id="passwordConfirmationError" class="form-text error-text" hidden>Please enter the same password as above.</div>
            </div>
            <button type="submit" id="registerButton" class="btn btn-theme">Submit</button>
          </form>
        </div>
      </div>
      </section>
    `;

  }

}
