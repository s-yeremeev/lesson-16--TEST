import "document-register-element"

export default class LineComponent extends HTMLDivElement {
  static displayName = "line-component"
  static extends = "div"

  constructor(props) {
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