if (document.querySelector("aside") && document.querySelector(".menu")) {
    document.querySelector(".menu").addEventListener("click", function(){
        document.querySelector(".green-screen").classList.add("green-screen-visible")
        setTimeout(() => {  document.querySelector("aside").classList.toggle("menu-visible") }, 500)
    })
}