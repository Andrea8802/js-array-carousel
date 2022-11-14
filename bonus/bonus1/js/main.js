// Creare uno carousel con una serie di immagini generate da js

// Componenti DOM
const container = document.querySelector(".item");

const buttonUp = document.querySelector(".circle.up");

const buttonDown = document.querySelector(".circle.down");

// Dichiarazione array immagini con ciclo for
const imgArray = [];

for (let i = 0; i < 7; i++){
    imgArray[i] = new Image();
    imgArray[i].src = `img/0${i}.webp`;
}

// Aggiunta classe per rendere visibile la prima slide
imgArray[1].classList.add("active")


// Dichirazione slide attuale
let nSlide = 1;
let lastImage = imgArray.length - 1;


// Ciclo per aggiungere immagini e le classi
for (let i = 0; i < imgArray.length; i++){
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
