import "document-register-element"
import LineComponent from "./line"
import ImageComponent from "./img"

export default class PageContainer extends HTMLDivElement {
  static displayName = "page-container"
  static extends = "div"

  constructor() {
    super()
    this.classList.add("container", "section")
    window.addEventListener("scroll", this.checkScroll)
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