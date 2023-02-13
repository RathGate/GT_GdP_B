if (document.querySelector("aside") && document.querySelector(".menu")) {
    document.querySelector(".menu").addEventListener("click", function(){
        if (document.querySelector("aside").classList.contains("menu-visible")) {
            document.querySelector("aside").classList.toggle("menu-visible")
            document.querySelector(".green-screen").remove()
            let div = document.createElement("div"); div.classList.add("green-screen")
            document.querySelector("header").appendChild(div)
        } else {
            document.querySelector(".green-screen").classList.add("green-screen-visible")
            setTimeout(() => { document.querySelector("aside").classList.toggle("menu-visible")}, 500)
        }
    })
}

document.querySelectorAll(".sub").forEach(element => {
    if (element.querySelector(".subtitle-container")) {
        element.addEventListener("mouseover", function() {
            element.querySelector(".subtitle-container").classList.add("visible")
        })
        element.addEventListener("mouseout", function() {
            element.querySelector(".subtitle-container").classList.remove("visible")
        })
    }
})