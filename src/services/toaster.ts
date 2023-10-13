export default class Toaster {

  constructor() {

  }

  public static toasterEvent(messageText, time){
    const element = document.createElement('div');
    element.className = "toast-notification";
    const countElements = document.getElementsByClassName("toast-notification");

    element.style.opacity= "0.8";
    element.style.marginBottom = (countElements.length * 90) + "px";

    const message = document.createElement("div");
    message.className = "message-container";
    message.textContent = messageText;

    element.appendChild(message);

    document.body.appendChild(element);

    setTimeout(function() {
      element.remove();
    }, time);
  }

}
