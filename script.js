// MENU DINÂMICO

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){

    navbar.classList.add("scrolled");

  }else{

    navbar.classList.remove("scrolled");

  }

});

// CONTADOR ANIMADO

const contador = document.getElementById("contador");

let numero = 0;

const intervalo = setInterval(() => {

  numero += 25;

  contador.innerHTML = numero;

  if(numero >= 5000){

    clearInterval(intervalo);

  }

}, 15);

// BOTÃO VOLTAR AO TOPO

const topo = document.getElementById("topo");

window.addEventListener("scroll", () => {

  if(window.scrollY > 300){

    topo.style.display = "block";

  }else{

    topo.style.display = "none";

  }

});

topo.addEventListener("click", () => {

  window.scrollTo({

    top:0,
    behavior:"smooth"

  });

});

// ANIMAÇÃO DOS CARDS

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";

    }

  });

});

cards.forEach((card) => {

  card.style.opacity = 0;
  card.style.transform = "translateY(50px)";
  card.style.transition = "1s";

  observer.observe(card);

});

// EFEITO DIGITAÇÃO NO TÍTULO

const titulo = document.querySelector(".hero h1");

const texto = titulo.innerHTML;

titulo.innerHTML = "";

let i = 0;

function digitar(){

  if(i < texto.length){

    titulo.innerHTML += texto.charAt(i);

    i++;

    setTimeout(digitar, 50);

  }

}

digitar();