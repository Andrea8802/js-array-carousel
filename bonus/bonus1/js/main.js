// Creare uno carousel con una serie di immagini generate da js

// Componenti DOM
const container = document.querySelector(".item");

const buttonUp = document.querySelector(".circle.up");

const buttonDown = document.querySelector(".circle.down");

// Dichiarazione array immagini
const imgArray = new Array;

imgArray[0] = new Image();
imgArray[0].src = "";

imgArray[1] = new Image();
imgArray[1].src = 'img/01.webp';

imgArray[2] = new Image();
imgArray[2].src = 'img/02.webp';

imgArray[3] = new Image();
imgArray[3].src = 'img/03.webp';

imgArray[4] = new Image();
imgArray[4].src = 'img/04.webp';

imgArray[5] = new Image();
imgArray[5].src = 'img/05.webp';

imgArray[6] = new Image();
imgArray[6].src = "";

// Aggiunta classe per rendere visibile la prima slide
imgArray[1].classList.add("active")


// Dichirazione slide attuale
let nSlide = 1;
let lastImage = imgArray.length - 1;


// Ciclo per aggiungere immagini e le classi
for (let i = 0; i < 6; i++){
    container.append(imgArray[i]);
    imgArray[i].classList.add("img-carousel")
}

// Freccia giù
buttonDown.addEventListener("click",
    function(){
        nSlide++;
   
        imgArray[nSlide].classList.add("active")
        imgArray[(nSlide - 1)].classList.remove("active")    

        if (nSlide === lastImage){
            imgArray[nSlide].classList.remove("active");
            nSlide = 1;
            imgArray[nSlide].classList.add("active");
        }
    }

)

// Freccia su
buttonUp.addEventListener("click",
    function(){

        if (nSlide => 0){
            nSlide--;
        }

        imgArray[nSlide].classList.add("active")
        imgArray[(nSlide + 1)].classList.remove("active")

        if (nSlide === 0){
            imgArray[nSlide].classList.remove("active");
            nSlide = lastImage - 1;
            imgArray[nSlide].classList.add("active");
        }

    }
)
