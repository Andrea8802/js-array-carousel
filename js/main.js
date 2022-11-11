// Creare uno carousel con una serie di immagini

const slide = document.getElementsByClassName("img-carousel");

const buttonUp = document.querySelector(".circle.up");

const buttonDown = document.querySelector(".circle.down");

let nSlide = 1;

buttonUp.addEventListener("click",
    function(){
        nSlide++;
        slide[(nSlide - 1)].classList.add("active")
        slide[(nSlide - 2)].classList.remove("active")
        
        if (nSlide === 2){
            buttonDown.classList.remove("hidden")

        } else if (nSlide === 5){
            buttonUp.classList.add("hidden")
        }
    }
)

buttonDown.addEventListener("click",
    function(){
        nSlide--;
        slide[nSlide].classList.remove("active")
        slide[(nSlide - 1)].classList.add("active")
        
        if (nSlide === 1){
            buttonDown.classList.add("hidden")
            
        } else if (nSlide === 4){
            buttonUp.classList.remove("hidden")
        }
    }
)
