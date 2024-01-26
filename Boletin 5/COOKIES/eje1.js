/**
 * Crear   un   formulario   que   contiene   un   conjunto   de   casillas   de   verificación   con   diferentes tipos   de   cafés   ­   espresso,   cappuccino,   moka,   y   así   sucesivamente.   Pida   al   usuario su   nombre   y   número   de   habitación   y   seleccionar   un   tipo   de   café.   Indicar   al   usuario   que va   a   enviar   el   café   a   su   número   de   habitación.   Cree   las   cookie   para   recordar   las preferencias   del   usuario.   La   próxima   vez   que   el   usuario  entre en la   página, en introduzca su nombre de usuario, se dirá que hay   una tarifa especial para su (utilice el valor de la cookie) café favorito.
 * 
 * <script>
        function ordenarCafe() {
            // Obtener los valores del formulario
            var nombre = document.getElementById("nombre").value;
            var habitacion = document.getElementById("habitacion").value;

            // Obtener los tipos de café seleccionados
            var cafes = [];
            var checkboxes = document.getElementsByName("cafe");
            checkboxes.forEach(function(checkbox) {
                if (checkbox.checked) {
                    cafes.push(checkbox.value);
                }
            });

            // Crear una cookie para recordar las preferencias del usuario
            document.cookie = "nombre=" + encodeURIComponent(nombre) + "; habitacion=" + encodeURIComponent(habitacion) + "; cafes=" + encodeURIComponent(cafes.join(','));

            alert("Su café será enviado a la habitación " + habitacion + ". Gracias, " + nombre + "!");
        }
        </script>
 */

        document.addEventListener('DOMContentLoaded', function() {
            const coffeeForm = document.getElementById('coffeeForm');
          
            coffeeForm.addEventListener('submit', function(event) {
              event.preventDefault();
          
              const nombre = document.getElementById('nombre').value;
              const habitacion = document.getElementById('habitacion').value;
          
              const cafesSeleccionados = [];
              const checkboxes = document.getElementsByName('cafe');
          
              for (let i = 0; i < checkboxes.length; i++) {
                if (checkboxes[i].type === 'checkbox' && checkboxes[i].checked) {
                  cafesSeleccionados.push(checkboxes[i].value);
                }
              }
          
              // Crear una cookie para recordar las preferencias del usuario
              setCookie('nombre', nombre, 365); // Cookie para el nombre con expiración de 1 año
              setCookie('habitacion', habitacion, 365); // Cookie para la habitación con expiración de 1 año
              setCookie('cafes', JSON.stringify(cafesSeleccionados), 365); // Cookie para los cafés con expiración de 1 año
          
              alert(`¡Gracias, ${nombre}! Se enviará ${cafesSeleccionados.join(', ')} a tu habitación ${habitacion}.`);
          
              // Redirigir o realizar otras acciones según sea necesario
            });
          
            // Verificar si hay cookies al cargar la página
            const nombreCookie = getCookie('nombre');
            if (nombreCookie) {
              alert(`¡Hola de nuevo, ${nombreCookie}! Tenemos una oferta especial para tu café favorito.`);
              // Puedes realizar acciones adicionales aquí según sea necesario
            }
          });
          
          // Función para establecer una cookie
          function setCookie(nombre, valor, diasExpiracion) {
            var fechaExpiracion = new Date();
            fechaExpiracion.setTime(fechaExpiracion.getTime() + (diasExpiracion * 24 * 60 * 60 * 1000));
          
            var cadenaCookie = `${nombre}=${encodeURIComponent(valor)}; expires=${fechaExpiracion.toUTCString()}; path=/`;
          
            // Establecer la cookie
            document.cookie = cadenaCookie;
          }
          
          // Función para obtener el valor de una cookie
          function getCookie(nombre) {
            var nombreCookie = `${nombre}=`;
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
              var cookie = cookies[i].trim();
              if (cookie.indexOf(nombreCookie) === 0) {
                return decodeURIComponent(cookie.substring(nombreCookie.length, cookie.length));
              }
            }
            return null;
          }
          