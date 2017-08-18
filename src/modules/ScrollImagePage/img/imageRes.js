/**
 * async function {fetchImg} to retrieve random images from the server
 */
export const fetchImg = async () => { 
   try {  
        const inputText = localStorage.getItem("inputText")
        let url
        const DEFAULT_URL = "https://source.unsplash.com/random"
        if (
            inputText !== null 
            && inputText !==""
        ) {
            url = DEFAULT_URL + "/?" + inputText
        } else {
            url = DEFAULT_URL
        }
        const response = await fetch(url, { method: 'GET' })
                  const blob = await response.blob()
                  const src = URL.createObjectURL(blob)
                  return src
   } catch (e) {
         console.log('Error ' + e.name + ":" + e.message + "\n" + e.stack)
         return null
   }
}