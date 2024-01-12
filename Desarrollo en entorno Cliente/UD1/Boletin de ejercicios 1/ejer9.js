salir = false;
contador = parseInt(0);
media = parseInt(0);
num = parseInt(prompt("Introduce un número"));
mayor = parseInt(num);
menor = parseInt(num);

while (!salir) {
    contador++;
    media += num;
    if (num > mayor) {
        mayor = num;
    }
    if (num < menor){
        menor = num;
    }

    num = parseInt(prompt("Introduce un número"));

    s = prompt("¿Desea salir? (s/n)");
    
    if (s == 's') {
        salir = true;
    }


}
contador++;
media+=num;
if (num > mayor) {
    mayor = num;
}

if (num < menor){
    menor = num;
}

alert("Mayor: " + mayor + "\n" + "Menor: " + menor + "\n" + "Media: " + (media / contador));
