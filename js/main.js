const d = document,
    $banner = d.querySelector(".banner"),
    $imgToDelete = d.querySelector(".banner-img");


console.log(window.screen)

d.addEventListener("DOMContentLoaded", e => {
    if(window.screen.width <= 595){
        $banner.removeChild($imgToDelete)
    }
})