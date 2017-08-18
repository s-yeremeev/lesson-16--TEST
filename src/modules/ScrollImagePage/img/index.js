import "document-register-element"
import { fetchImg } from "./imageRes"

/**
 * @class ImageComponent
 * Creating new object with a image
 * @return {ImageComponent}
 */
export default class ImageComponent extends HTMLDivElement {
  static displayName = "image-component"
  static extends = "div"

  constructor() {
    super()
  }

  async newImageAdd() {
    this.classList.add("column", "is-4")
    
    const card = document.createElement("div")
    card.classList.add("card")
    this.appendChild(card)

    const image = document.createElement("div")
    image.classList.add("card-image")
    card.appendChild(image)

    const figure = document.createElement("figure")
    figure.classList.add("image", "is-4by3")
    image.appendChild(figure)
    
    const img = new Image()
    img.src = await fetchImg()
    img.alt = "Image"
    figure.appendChild(img)
    return this
  }
}

customElements.define(
  ImageComponent.displayName,
  ImageComponent, 
  { extends: ImageComponent.extends }
)