import "document-register-element"

/**
 * @class LineComponent
 * Creating new object {line} for 3 image
 * @return {LineComponent}
 */
export default class LineComponent extends HTMLDivElement {
  static displayName = "line-component"
  static extends = "div"

  constructor() {
    super()
  }

  newLineAdd(props) {
    const imgs = props.imgs
    this.classList.add("columns")
    
    imgs.forEach(img => this.appendChild(img))
    return this
  }
}

customElements.define(
  LineComponent.displayName, 
  LineComponent, 
  { extends: LineComponent.extends }
)