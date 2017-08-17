import "document-register-element"
import LineComponent from "./line"
import ImageComponent from "./img"

export default class PageContainer extends HTMLDivElement {
  static displayName = "page-container"
  static extends = "div"

  constructor() {
    super()
    this.classList.add("container", "section")

    const input = document.createElement("input")
    input.type = "text"
    input.id = "keyword"
    this.appendChild(input)

    const button = document.createElement("button")
    button.innerHTML = "Send"
    this.appendChild(button)

    this.inputText = this.inputText.bind(this)
    button.addEventListener("click", this.inputText)
    

    window.addEventListener("scroll", this.checkScroll)
  }

  inputText(event) {
    const checkText = document.getElementById("keyword")
    const text = checkText.value
    localStorage.setItem("inputText", text)
}

  addResponse() {    
    for (let i = 1; i <= 3; ++i){ 
      this.LineAddToPage()
    }
      return this
  }

  async LineAddToPage() {
    const imgs = await Promise.all([
                          this.addImgInLine(), 
                          this.addImgInLine(), 
                          this.addImgInLine()
                        ])
    this.appendChild(new LineComponent().newLineAdd({ imgs }))
    return this
  }

  async addImgInLine() {
    return new ImageComponent().newImageAdd()
  }

  checkScroll = async () => {
    const el = document.getElementsByClassName("column is-4")
    const lastEl = el[el.length -1]
    if (window.scrollY + window.outerHeight - 350 > lastEl.offsetTop) {
                await Promise.all([ 
                              this.LineAddToPage()                            
                                ])
       }
    }
}

customElements.define(
  PageContainer.displayName, 
  PageContainer, 
  { extends: PageContainer.extends }
)