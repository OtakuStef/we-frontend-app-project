export default class FormValidator {
  form  : any;
  fields : any;

  constructor() {
    this.form = document.querySelector('.form')
    this.fields = document.querySelectorAll(".mandatory");
  }

  initialize() {
    this.validateOnEntry()
    this.validateOnSubmit()
  }

  validateOnSubmit() {
    let self = this

    this.form.addEventListener('submit', e => {
      e.preventDefault()
      self.fields.forEach(field => {
        self.validateFields(field)
      })
    })
  }

  validateOnEntry() {
    let self = this
    this.fields.forEach(field => {
      const input = document.querySelector("#"+field.id)

      input.addEventListener('input', () => {
        self.validateFields(input)
      })
    })
  }

  validateFields(field) {

    // Check presence of values
    if (field.value.trim() === "") {
      this.setStatus(field, true)
    } else {
      this.setStatus(field, false)
    }

    // check for a valid email address
    if (field.type === "email") {
      const re = /\S+@\S+\.\S+/
      if (re.test(field.value)) {
        this.setStatus(field, false)
      } else {
        this.setStatus(field, true)
      }
    }

    // Password confirmation edge case
    if (field.id === "passwordConfirmation") {
      const passwordField : any = this.form.querySelector('#password')

      if (field.value.trim() == "") {
        this.setStatus(field, true)
      } else if (field.value != passwordField.value) {
        this.setStatus(field, true)
      } else {
        this.setStatus(field, false)
      }
    }
  }

  setStatus(field, isError : boolean) {
    const messageField : any = document.querySelector("#" + field.getAttribute("itemref"))
    if (isError) {
      field.classList.add('error-field');
      messageField.hidden = false;
      messageField.classList.add('error-text');
    } else {
      field.classList.remove('error-field');
      messageField.hidden = true;
      messageField.classList.remove('error-text');
    }

  }
}