const letras= "q w e r t y u i o p a s d f g h j k l ñ z x c v b n m . ,";
//convertir la anterior cadena de texto a array
const qwerty =letras.split(" ");
let shiftActivo = false;// bandera para shift iniciada en falso

//crear teclado

for (let i=0 ; i < qwerty.length ; i++) {
    
    //crear teclas tantas como letras tiene el array
    let div= document.createElement("div");
    let letra = qwerty[i];
    //asignarle atributos a las teclas 
    div.setAttribute("class", "letra");
    //añadimos el atributo de funcion con la letra que enviará como parámetro
    
    //finalmente he tenido que poner que dé el valor de i (luego lo compararé con el array)
    //porque es prácticamente imposible meter un string dinámico como parámetro usando setAtributte

    div.setAttribute("onclick", `teclado(${i})`);
    div.setAttribute("value", qwerty[i]);
    //coger el div padre de las teclas
    let teclado = document.getElementById("teclado");
    //meter teclas
    teclado.appendChild(div);
    //introducir texto de las teclas
    let node = document.createTextNode(qwerty[i].toLowerCase());
    div.appendChild(node);


}
//elemento textarea en variable global ya que va a utilizarse en más funciones
let textarea = document.getElementById("text");

//x será la variable que cogerá los parámetros de la función según se pulse una tecla u otra
function teclado(x) {

    //ahora vamos a coger la letra del array con la posición que dé x (i)
    let letra = qwerty[x];
    //acumulador de letras para mostrar en el textarea (efecto teclado)
    textarea.value += letra; 
    //vamos a necesitar letra en otras funciones  
    return letra; 
}

function salto(){

    let br = "\n"; //retorno de carro ASCII, había probado "<br>" pero lo incluye literal
    textarea.value += br; 
}

function space(){

    let spc = " "; //retorno de carro ASCII, había probado "<br>" pero lo incluye literal
    textarea.value += spc; 
}

//bandera porque a la función toLowerCase () no podemos hacerle toogle

function shift() {
    shiftActivo = !shiftActivo; // Cambiar el estado del teclado Shift

    // Obtener todas las teclas del teclado
    const teclas = document.getElementsByClassName("letra");

    // Actualizar el estilo de las teclas según el estado del teclado Shift
    if (shiftActivo) {
        for (let i = 0; i < teclas.length; i++) {
            teclas[i].innerHTML = qwerty[i].toUpperCase();
        }
    } else {
        for (let i = 0; i < teclas.length; i++) {
            teclas[i].innerHTML = qwerty[i].toLowerCase();
        }
    }
}

function teclado(x) {
    let letra = qwerty[x];

    if (shiftActivo) {
        letra = letra.toUpperCase();
    } else {
        letra = letra.toLowerCase();
    }

    textarea.value += letra;
    return letra;
}



// function shift(){
//     toggle
//     // if (shift) {
//     //     text.toUpperCase();
//     // }
//     // else {
//     //     text.toLowerCase();
//     // } 
//     // //igual que la funciones anteriores, porque tenemos que seguir escribiendo

//     // textarea += letra;
// }

function del(){
    //también es necesario extraer todo el texto (value de textarea) tal y como esté antes de pulsar
    //la tecla, por eso lo declaro la variable string dentro de la función. 

    let string = text.value;
    //saber cuantas letras tiene para borrar la última letra
    let cantidad_letras= string.length;
    
    // alert(cantidad_letras);
    
    //toda la cadena menos la última letra
    
    let del = string.substring(0, cantidad_letras-1);
    
    text.value= del;
    
}