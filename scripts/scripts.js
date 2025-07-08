    let menu = document.querySelector(".menu");
    let burguerButton = document.querySelector(".burguer i");
    let navLinks = document.querySelectorAll(".menu .item"); // Selecciona todos los enlaces de navegación

    function displayMenu() {
        menu.classList.toggle("active");
        burguerButton.classList.toggle("fa-circle-xmark");
        burguerButton.classList.toggle("fa-bars"); // IMPORTANTE: Para que el icono vuelva a ser la hamburguesa
    }

    // Añade un event listener a cada enlace de navegación para cerrar el menú
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Solo cierra el menú si está activo (abierto)
            if (menu.classList.contains("active")) {
                displayMenu(); // Llama a la función para cerrar el menú y resetear el icono
            }
        });
    });
