frase = "hol a como estas "

expVal = new RegExp('([a-z|0-9]){3,}\s?');

if(expVal.test(frase)){
    alert(frase)
}
