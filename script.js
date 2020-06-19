const images = Array.from(document.querySelectorAll(".image")).map(image => image.dataset.src)
window.currentImage = 0
const switchBigImage = () => {
    const url = images[window.currentImage]
    document.querySelector(".big-image").style["background-image"] = `url(${url})`
}
const showBigImage = () => {
    document.querySelector(".scrim").style.display = "flex"
}
const hideBigImage = () => {
    document.querySelector(".scrim").style.display = "none"
}

document.querySelectorAll(".image").forEach((image, index) => {
    image.style["background-image"] = `url(${image.dataset.src})`
    image.addEventListener("click", () => {
        window.currentImage = index
        switchBigImage()
        showBigImage()
    })
})

document.querySelector(".left-arrow").addEventListener("click", (e) => {
    window.currentImage = window.currentImage - 1
    if (window.currentImage < 0) {
        window.currentImage = images.length - 1
    }
    switchBigImage()
    e.stopPropagation()
})

document.querySelector(".right-arrow").addEventListener("click", (e) => {
    window.currentImage = window.currentImage + 1
    if (window.currentImage > images.length - 1) {
        window.currentImage = 0
    }
    switchBigImage()
    e.stopPropagation()
})

document.querySelector(".scrim").addEventListener("click", () => {
    hideBigImage()
})

