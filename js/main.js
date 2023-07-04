//SCROLL 
const headerTop = document.getElementById('header-desktop');
const btnTop = document.getElementById('btn__top');
const btnMenu = document.getElementById('btn__menu');
const menuMobile = document.getElementById('nav__menu');
const btn__closeMenu = document.getElementById('btn__close-menu');

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

// ABRIR MENU NAV
function clickMenu (){
    menuMobile.style.display = "block";
}

// FECHAR MENU NAV 
function clickCloseMenu (){
    menuMobile.style.display = "none";
}

// DESABILITAR SCROLL

     //salvar posição scroll

function disableScroll (){
    const positionScroll = window.scrollY;
    document.body.style.overflow = "hidden";
    window.scrollTo(0, positionScroll);
}

// HABILITAR SCROLL 

function ableScroll (){
    document.body.style.overflow = "auto"
}


// EVENTOS
btnTop.addEventListener("click", clickTop)
window.addEventListener("scroll", scrollDown);
window.addEventListener("scroll", scrollDownHeader);
btnMenu.addEventListener("click", clickMenu);
btnMenu.addEventListener("click", disableScroll);
btn__closeMenu.addEventListener("click", clickCloseMenu);
btn__closeMenu.addEventListener("click", ableScroll);


