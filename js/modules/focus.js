// Creando el efecto focus en los inputs correspondientes
const inputs = document.querySelectorAll('input:not([type="checkbox"])');
const arrInputs = Array.from(inputs);

inputs.forEach( input => {

    input.addEventListener('focus', (event) => {
        if( event.target.nextElementSibling ) {
            event.target.nextElementSibling.classList.add("onfocus");
        }
    });

    input.addEventListener('blur', (event) => {
        if( input.value.trim().length == 0 ) {
            event.target.nextElementSibling.classList.remove("onfocus");
        }
    });

} );