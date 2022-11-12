// Creare uno carousel con una serie di immagini generate da js

// Componenti DOM
const container = document.querySelector(".item");

const buttonUp = document.querySelector(".circle.up");

const buttonDown = document.querySelector(".circle.down");

// Dichiarazione array immagini
const imgArray = new Array;

imgArray[0] = new Image();
imgArray[0].src = 'img/01.webp';

imgArray[1] = new Image();
imgArray[1].src = 'img/02.webp';

imgArray[2] = new Image();
imgArray[2].src = 'img/03.webp';

imgArray[3] = new Image();
imgArray[3].src = 'img/04.webp';

imgArray[4] = new Image();
imgArray[4].src = 'img/05.webp';

// Aggiunta classe per rendere visibile la prima slide
imgArray[0].classList.add("active")


// Dichirazione slide attuale
let nSlide = 0;


// Ciclo per aggiungere immagini e le classi
for (let i = 0; i < 5; i++){
    container.append(imgArray[i]);
    imgArray[i].classList.add("img-carousel")
}

// Freccia giù
buttonDown.addEventListener("click",
    function(){
        nSlide++;
   
        imgArray[nSlide].classList.add("active")
        imgArray[(nSlide - 1)].classList.remove("active")

        if (nSlide === 1){
            buttonUp.classList.remove("hidden")

        } else if (nSlide === 4){
            buttonDown.classList.add("hidden")

        }
    }
)

// Freccia su
buttonUp.addEventListener("click",
    function(){
        nSlide--;

        imgArray[nSlide].classList.add("active")
        imgArray[(nSlide + 1)].classList.remove("active")
        
        if (nSlide === 0){
            buttonUp.classList.add("hidden")
            
        } else if (nSlide === 3){
            buttonDown.classList.remove("hidden")
        }
    }
)
