
function numeroAlumnos() {
    numAlumnos = document.getElementById("numAlumnos").value;
    document.getElementById("alumnos").innerHTML = numAlumnos;


    numGanador = Math.floor((Math.random() * numAlumnos) + 1);
    document.getElementById("alumnoGanador").innerHTML = numGanador;


    var grid = document.getElementById("my_grid")

    for ( var i = 1; i <= numAlumnos; i++){

        var hijo = document.createElement("div");
        var text= document.createTextNode(i);

        hijo.setAttribute("id","alumno"+i)
        
        hijo.appendChild(text);
        grid.appendChild(hijo);


    }

        intervalo = setInterval(numeros,500)
        setTimeout(ganador,6000)

        function numeros(){
            var aleatorio = Math.floor(Math.random() *(document.getElementById("numAlumnos").value) + 1)

            document.getElementById("alumno"+aleatorio).classList.toggle('anima_alumno');
          
        }

         function ganador(){
            clearInterval(intervalo)

            var ganador = document.getElementById("alumno"+numGanador).classList.toggle('anima_victoria');

        }


}
