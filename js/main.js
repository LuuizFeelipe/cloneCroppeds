//SCROLL 
const headerTop = document.getElementById('header-desktop');
const btnTop = document.getElementById('btn__top');

// MOVIMENTAR HEADER DESKTOP APÓS DAR SCROLL NA TELA
function scrollDownHeader (){
    const scrollY = window.scrollY;

    if(scrollY > 100){
        headerTop.style.top = "0";
    } else {
        headerTop.style.top ="20px";
    }
}

// IDENTIFICAR ROLAGEM DA TELA E ESCONDER/APRESENTAR BOTÃO TOP
function scrollDown (){
    const scrollY = window.scrollY;

    if(scrollY > 250){
        btnTop.classList.add('show');
    } else {
        btnTop.classList.remove('show');
    }
}

// IDENTIFICAR CLICK NO BOTÃO TOP E SUBIR ATÉ O TOPO DA PÁGINA
function clickTop (){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// EVENTOS
btnTop.addEventListener("click", clickTop)
window.addEventListener("scroll", scrollDown);
window.addEventListener("scroll", scrollDownHeader);


