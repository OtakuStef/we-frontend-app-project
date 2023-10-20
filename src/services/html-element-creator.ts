export class HtmlElementCreator{
  static createDivElement(divClass : string[]){
    const divElement = document.createElement("div");
    for (let itemIndex in divClass){
      divElement.classList.add(divClass[itemIndex]);
    }
    return divElement;
  }

  static createImageElement(imgClass : string, source : string, altText : string){
    const imageElement = document.createElement("img");
    imageElement.classList.add(imgClass);
    imageElement.src = source;
    imageElement.alt = altText;
    return imageElement;
  }

  static createTextElement(textType : string, textClass : string, text : string){
    const textElement = document.createElement(textType);
    textElement.classList.add(textClass);
    textElement.textContent = text;
    return textElement;
  }

  static createButtonElement(buttonClasses : string[], icon : string, buttonIconClass : string){
    const buttonElement = document.createElement("a");
    const buttonIcon = this.createButtonIconElement(icon, buttonIconClass);
    for(let buttonClassIndex in buttonClasses){
      buttonElement.classList.add(buttonClasses[buttonClassIndex]);
    }
    buttonElement.classList.add("btn");
    buttonElement.classList.add("m-2");

    buttonElement.appendChild(buttonIcon);

    return buttonElement;
  }

  static createButtonIconElement(buttonIconName: string, buttonClass : string){
    const buttonIcon = document.createElement("i");
    buttonIcon.classList.add("material-symbols-outlined");
    buttonIcon.classList.add(buttonClass);
    buttonIcon.innerText = buttonIconName;
    return buttonIcon;
  }

  static createTextButtonElement(buttonTheme : string, text : string, buttonType : string){
    const buttonElement = document.createElement("a");
    buttonElement.classList.add("btn");
    buttonElement.classList.add("m-2");
    buttonElement.classList.add("fs-5")
    buttonElement.classList.add(buttonTheme);
    buttonElement.text = text;
    buttonElement.classList.add("disabled");
    buttonElement.classList.add(buttonType);

    return buttonElement;
  }

  static createDividerElement(){
    const dividerElement = document.createElement("hr");
    dividerElement.classList.add("hr");
    return dividerElement;
  }
}

