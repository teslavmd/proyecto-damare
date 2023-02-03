const d = document;

//AIM TRAINING
const $pointer = d.querySelector(".aim__training-pointer"),
    {height, width} = d.querySelector(".aim__training-box").getBoundingClientRect(),
    $btnStart = d.querySelector(".start"),
    $btnStop = d.querySelector(".stop")
    $stats = d.querySelector("#stats");


let countHit = 0;
let countFailed = -1; 
let count = 0;
let stopIt = false;

d.addEventListener('click', e => {
    //EMPEZAR EL TEST DE AIM
    if(e.target.matches(".start")){
        $btnStart.disabled = true;
        $btnStop.disabled = false;

        //INTERVAL
        const myInterval = setInterval(() => {
            count = count + 1;
            
            generateRandomPlace();
            $stats.innerHTML = `
                                <h4>COUNT : ${count} of 30</h4>
                                <h4>HITS : ${countHit}</h4>
                                <h4>FAILED : ${countFailed}</h4>
                                `
            //MAXIMO DE INTENTOS  = 30;
            //EL TEST SE DETIENE AUTOMATICAMENTE
            if (count == 30) {
            clearInterval(myInterval);
            countFailed = -1;
            countHit = 0;
            count = 0;
            $btnStart.disabled = false;
            $btnStop.disabled = true;
            }
            //PARAR EL TEST MANUALMENTE
            console.log(e.target.matches(".stop"))
            if(stopIt){
                clearInterval(myInterval);
                countFailed = -1;
                countHit = 0;
                count = 0;
                $btnStart.disabled = false;
                $btnStop.disabled = true;
                stopIt = false;
            }
        }, 600);

    }

    if(e.target.matches(".stop")){
        stopIt = true;
    }

    //CONTAR LOS HITS Y/O FALLOS REALIZADO EN EL TEST DE AIM
    if($btnStart.disabled){
        if(e.target.matches(".aim__training-pointer")){
            countHit++ 
        }else if(!e.target.matches(".aim__training-pointer")){
            countFailed++
        }
    }

//SELECCIONAR EL NIVEL DE DIFICULTAD DEL AIM
    if(e.target.matches(".hard")){
        $pointer.style.height = "30px";
        $pointer.style.width = "30px";
    }else if(e.target.matches(".medium")){
        $pointer.style.height = "60px";
        $pointer.style.width = "60px";
    }else if(e.target.matches(".easy")){
        $pointer.style.height = "90px";
        $pointer.style.width = "90px"
    }
})

function getRandomNumber( min, max ) {
    return Math.round( Math.random() * ( max - min ) + min )
}

function generateRandomPlace(){
    let x = getRandomNumber(0 , width - 140);
    let y = getRandomNumber(0 , height - 140);
    
    $pointer.style.top = `${y}px`;
    $pointer.style.left = `${x}px`;
    
    
}

//SCROLL REVEAL
ScrollReveal().reveal(".header-nav");
ScrollReveal().reveal(".wrapper");
ScrollReveal().reveal(".about-us");
ScrollReveal().reveal(".about-us");
ScrollReveal().reveal(".about-us__card")
ScrollReveal().reveal(".about-us__video")
ScrollReveal().reveal(".player__card", {delay : 200});

//FRASE DELAY
ScrollReveal().reveal(".damare__text", {delay : 300})
ScrollReveal().reveal(".delay", {delay : 5000})


