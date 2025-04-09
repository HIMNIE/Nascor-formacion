      // funcion para calcular la edad del usuario
    

    const formulario = document.querySelector("#form");

    const aside = document.querySelector("#barraLateral");

    formulario.onsubmit = function (e) {
        e.preventDefault()
        let nombreUsuario = document.querySelector("#nombreUsuario").value;
        let fechaNacimiento = document.querySelector("#fechaNacimiento").value;
        let estudios = document.querySelector("#estudios").value;
        // creamos un objeto date con la fecha de nacimiento
        const fechaNacimientoUsuario = new Date(fechaNacimiento);

        // obtenemos la fecha actual del sistema
        const fechaActual = new Date();

        // aseguramos que la fecha de nacimiento no sea futura
        if (fechaNacimientoUsuario > fechaActual) {
            alert("Amigo... esa fecha es del futuro. ¡Revisa bien los datos!");
            return;
        }

        // calculamos la diferencia de años entre las fechas
        let edad = fechaActual.getFullYear() - fechaNacimientoUsuario.getFullYear();

        // ajustamos la edad si todavia no ha sido tu cumpleaños este año
      
        const mesNacimiento = fechaNacimientoUsuario.getMonth();
        const diaNacimiento = fechaNacimientoUsuario.getDate();
        const mesActual = fechaActual.getMonth();
        const diaActual = fechaActual.getDate();

        if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
            edad--; // restamos un año porque todavia no cumples años
        } if (edad < 18) {
            alert("Debes ser mayor de edad para continuar.");
            document.querySelector("#nombreUsuario").value = '';
document.querySelector("#fechaNacimiento").value = '';
document.querySelector("#estudios").value = '';

            document.getElementById("container").style.display = "none";
            return;
            
        }
        else {
            aside.innerHTML = `
            <h2>
                Datos de registro:

            </h2>
            Nombre: ${nombreUsuario}<br>
            Fecha de Nacimiento: ${fechaNacimiento}<br>
            Estudios: ${estudios}<br>
            Edad: ${edad}<br>


                           `
        }
           //desaparece primer form
           formulario.style.display = "none";
           //mostramos contenedor de tareas
           document.getElementById("container").style.display = "block";
    }

      
     

     //obtenemos los objetos creados en html con el dom
     let inputTarea = document.getElementById('inputTarea');
     const anadirTareaBtn = document.querySelector('#añadirTareaBtn');
     let lista = document.querySelector('#listaTareas');

     console.log(inputTarea.value);
     console.log(lista.value);


     function anadirTareas() {
         let tarea = inputTarea.value;

         console.log(tarea);
         if (!tarea || tarea == '') { return; }
         let elemenLista = `
 <li>${tarea}
 <button class="borrarBtn" onclick=" this.parentNode.remove()">
     <span style="color: red; ">X</span>
  
 </button>
 </li>`;
         lista.innerHTML += elemenLista;
         inputTarea.value = '';

     }
     anadirTareaBtn.onclick = anadirTareas;

     document.getElementById("inputTarea").addEventListener("keypress", function(event)
      { if (event.key === "Enter") document.getElementById("añadirTareaBtn").click(); });

