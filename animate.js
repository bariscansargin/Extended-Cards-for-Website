const imageArray = document.querySelectorAll(".img-container")

imageArray.forEach((image) => {
    image.addEventListener("click", () => {
        removeActiveClass()
        image.classList.add("active")
    })
})

function removeActiveClass() {

    imageArray.forEach((image) => {
        image.classList.remove("active")
    })

}