frase = "Hola"
cont = 0;
posIndex = frase.indexOf(" ", 0);

while(posIndex != -1){
    cont++;
    posIndex = frase.indexOf(" ", posIndex + 1);
}
cont++
console.log(cont)
