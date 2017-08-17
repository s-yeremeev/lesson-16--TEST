import "./index.scss"
import PageContainer from "./modules/ScrollImagePage"

const onLoad = function () {
  document.body.appendChild(new PageContainer().addResponse())
}

window.addEventListener("load", onLoad)