r = parseInt(prompt("Introduce el radio de la esfera"));



switch (parseInt(prompt("1. Area \n 2. Volumen \n"))) {
    case 1:
        result = 4 * Math.PI * Math.pow(r,2);;
        break;
    case 2:
        result = (4 / 3)*Math.PI * Math.pow(r,3);
        break;
    default:
        break;
}

alert(result)