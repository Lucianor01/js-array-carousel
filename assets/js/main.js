const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const img = document.querySelector('.container_img');

let listaImmagini = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp'
]

for(let i = 0; i < listaImmagini.length; i++){
    img.innerHTML += `<img class="img d-none" src="./assets/img/${listaImmagini[i]}" alt="image"></img>`
}

const immagini = document.querySelectorAll("img");

let contatoreImmagini = 0;

immagini[0].classList.remove("d-none");

next.addEventListener( 'click', function(){

    immagini[contatoreImmagini].classList.add("d-none");
    contatoreImmagini++;
    next.classList.remove("d-none");

    if( contatoreImmagini == listaImmagini.length ){
        contatoreImmagini = 0;
    }immagini[contatoreImmagini].classList.remove("d-none");

})

prev.addEventListener( 'click', function(){

    immagini[contatoreImmagini].classList.add("d-none");
    next.classList.remove("d-none");

    if( contatoreImmagini === 0){
        contatoreImmagini = listaImmagini.length;
    }

    contatoreImmagini--;

    immagini[contatoreImmagini].classList.remove("d-none");
});

