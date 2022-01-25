const newImgBtn = document.getElementById("new-img-btn")
const downloadBtn = document.getElementById("download-btn")
const imgHolder = document.getElementById("anime-img")
// canvases
const bwFilter = document.getElementById("bw-filter")
const bwFilterCanvas = document.getElementById("bw-filter-canvas")

const blurFilter = document.getElementById("blur-filter")
const blurFilterCanvas = document.getElementById("blur-filter-canvas")

const invertFilter = document.getElementById("invert-filter")
const invertFilterCanvas = document.getElementById("invert-filter-canvas")

const randomAnimImggUrl = "https://api.waifu.pics/sfw/neko"

async function getRandomImg(){
    const response = await fetch(randomAnimImggUrl)
    const data = await response.json()

    return data  
}

// get first image
getRandomImg()
    .then(data =>{
        imgHolder.src = data.url
        console.log(data.url)
    })
    .catch(err=>{
        console.log(err)
    })

    // get new image
newImgBtn.addEventListener("click", ()=>{

    getRandomImg()
        .then(data =>{
            imgHolder.src = data.url
        
            console.log(data.url)
        })
        .catch(err=>{
            console.log(err)
        })
})


// greyscale Filter
bwFilter.addEventListener("click",()=>{
    let ctx = bwFilterCanvas.getContext("2d")
    ctx.filter = "grayscale(100%)"
    ctx.drawImage(imgHolder, 0, 0, bwFilterCanvas.width, bwFilterCanvas.height)
})

// blur filter
blurFilter.addEventListener("click",()=>{
    let ctx = blurFilterCanvas.getContext("2d")
    ctx.filter = "blur(5px)"
    ctx.drawImage(imgHolder, 0, 0, blurFilterCanvas.width, blurFilterCanvas.height)
})

// invert filter
invertFilter.addEventListener("click",()=>{
    let ctx = invertFilterCanvas.getContext("2d")
    ctx.filter = "invert()"
    ctx.drawImage(imgHolder, 0, 0, invertFilterCanvas.width, invertFilterCanvas.height)
})

// download button is disabled for now
downloadBtn.style.color = "#333"
downloadBtn.style.backgroundColor = "rgb(212, 212, 212)"
downloadBtn.style.boxShadow = "none"