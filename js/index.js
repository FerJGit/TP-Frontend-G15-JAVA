// Para ir cambiando la imagen de fondo blureada del index.html
console.log("adentro");
let contador = 1;
let fondo_img = document.getElementById("fondo_blur");    

const cambioFondo = () => {
    contador ++;
    if(contador>3)
        contador = 1;
    console.log("contador=" + contador.toString());
    console.log("Actual:" + fondo_img.src);
    fondo_img.src = "img/Fondo" + contador.toString() + "_blur.jpg";
}

const intervalID = setInterval(cambioFondo, 7000);
