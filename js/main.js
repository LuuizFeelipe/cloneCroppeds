//SCROLL 
const headerTop = document.getElementById('header-desktop');


function scrollDownHeader (){
    const scrollY = window.scrollY;

    if(scrollY > 100){
        headerTop.style.top = "0";
    } else {
        headerTop.style.top ="20px";
    }
}

function scrollDown (){
    const scrolly = window.scrollY;

    if(scrollY > 400){

    }
}





window.addEventListener("scroll", scrollDownHeader);


