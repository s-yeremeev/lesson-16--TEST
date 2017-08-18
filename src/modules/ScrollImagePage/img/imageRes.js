export const fetchImg = async () => {  
   try {  
        const inputText = localStorage.getItem("inputText")
        if (
            inputText !== null 
            && inputText !==""
        ) {
            let url = "https://source.unsplash.com/random/?" + inputText
            return url
        } else {
            let url = "https://source.unsplash.com/random"
            return url
        }
        const response = await fetch(url, {
                     method: 'GET',
                     mode: "cors",
                     cache: "default",
                      
                 })
                  const blob = await response.blob()
                  const src = URL.createObjectURL(blob)
                  return src
   } catch (e) {
         console.log('Error ' + e.name + ":" + e.message + "\n" + e.stack)
         return null
   }
}