export const fetchImg = async function () {  
  try {  
        const response = await fetch('https://source.unsplash.com/random', {
        method: 'GET',
        mode: "cors",
        cache: "default"
    })    
        const blob = await response.blob()
        const src = URL.createObjectURL(blob)
        return src
  } catch (e) {
        console.log('Error ' + e.name + ":" + e.message + "\n" + e.stack)
        return null
  }
}