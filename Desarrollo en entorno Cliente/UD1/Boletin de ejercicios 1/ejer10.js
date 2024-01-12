salir = 'n';

while (salir != 's'){
    salir = prompt("Introduce una cantidad (s para salir)")
    moneda = parseFloat(salir)

    pais = parseInt(prompt("Introduce una el pais: " + "\n" + "1. Euros" 
                        +"\n" + "2. Dolar"
                        +"\n" + "3. Yenes"
                        +"\n" + "4. Dolar Franco-Suizo"
                        +"\n" + "5.Corona Noruega"
                    ))
    switch (pais) {
        case 1: alert("Euros: " + moneda )
            break;
        case 2: alert("Dolar: " + moneda * 0.90)
        break;
        case 3: alert("Yenes: " + moneda * 10023)
        break;
        case 4: alert("Dolar Franco-Suizo: " + moneda * 1.10)
        break;
        case 5: alert("Corona Noruega: " + moneda * 0.69)
        break;

    
        default:
            break;
    }
}