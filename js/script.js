import { dptosLocs } from './modules/datos.js';
import { validarCedula } from './modules/logica.js';

// Colocando las localidades de departamentos de forma dinámica
const departamentField = document.querySelector("#departament");
departamentField.addEventListener("change", focus);


// Validación de formulario
const form = document.querySelector("#contact-form");

form.addEventListener( 'submit', (event) => {
    event.preventDefault();

    const name = event.target.name,
          surname = event.target.surname,
          email = event.target.email,
          departament = event.target.departament,
          location = event.target.location,
          ci = event.target.ci,
          terms = event.target.terms;

    const arrayInputs = [name, surname, email, departament, location, ci, terms];

    const data = {
        name: event.target.name.value,
        surname: event.target.surname.value,
        email: event.target.email.value,
        departament: event.target.departament.value,
        location: event.target.location.value,
        ci: event.target.ci.value,
        terms: event.target.terms.checked
    }

    arrayInputs.forEach( input => {
        resetInput(input);
        input.addEventListener('focus', resetInputOnEvent);
        validateInput(input);
    });

    if( success.allFieldsValidate ) {
        document.querySelector(".fake-popup").classList.add("fake-popup--open");
        setTimeout( () => {
            document.querySelector(".fake-popup").classList.remove("fake-popup--open");
        }, 3000);
    }

});

let success = {
    name: false,
    surname: false,
    email: false,
    departament: false,
    location: false,
    ci: false,
    terms: false,
    allFieldsValidate: false
};

function validateInput(input) {

    if ( input.value === '' ) {
        sendErrorMessage(input, "El campo no puede quedar en blanco.");

        if( input.name === 'departament' ) {
            success.departament = false;
        }else if( input.name == 'location' ){
            success.location = false;
        }else if( input.name == 'ci' ){
            success.ci = false;
        }

    }else {

        if( input.name === 'departament' ) {
            success.departament = true;
        }else if( input.name == 'location' ){
            success.location = true;
        }else if( input.name == 'ci' ){
            success.ci = true;
        }

    }

    if ( input.name === 'name' || input.name === 'surname' ) {
        if( input.value != '' && input.value.length < 2 ) {
            sendErrorMessage(input, "Este campo no puede contener menos de 2 caracteres");
            if( input.name === 'name' ) {
                success.name = false;
            }else if( input.name == 'surname' ){
                success.surname = false;
            }
        }else {
            if( input.name === 'name' ) {
                success.name = true;
            }else if( input.name == 'surname' ){
                success.surname = true;
            }
        }
    }

    if( input.name === 'email' ) {
        
        const regExEmail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

        if( input.value != '' && !regExEmail.test(input.value) ) {
            sendErrorMessage(input, "Por favor, ingrese un e-mail válido.");
            success.email = false;
        }else {
            success.email = true;
        }

    }

    if( input.name === 'ci' ) {
        let validateCI = validarCedula(input.value);
        
        if( !validateCI ) {
            sendErrorMessage(input, "Por favor, ingrese una Cédula de Identidad (C.I.) válida.");
            success.ci = false;
        }else {
            success.ci = true;
        }

    }

    if( input.name === 'terms' ) {

        if( !input.checked ) {
            sendErrorMessage(input, "Debe aceptar las bases y condiciones antes de enviar el formulario");
        }

        success.terms = input.checked;
    }

    
    ( success.name === true && success.surname === true && success.email === true && success.departament === true && success.location === true && success.ci === true && success.terms === true ) ? success.allFieldsValidate = true : success.allFieldsValidate = false;

}

function resetInputOnEvent(e) {

    const id = e.target.id
    const isErrorMessage = ( document.querySelector(`.form-control.${id} .form__error`) ) ? true : false;

    if( isErrorMessage ) {
        e.target.style.borderColor = "#aaa";
        document.querySelector(`.form-control.${id} .form__error`).remove();
    }

}

function resetInput(input) {

    const id = input.id
    const isErrorMessage = ( document.querySelector(`.form-control.${id} .form__error`) ) ? true : false;

    if( isErrorMessage ) {
        input.style.borderColor = "#aaa";
        document.querySelector(`.form-control.${id} .form__error`).remove();
    }

}

function focus(event){
    let locationsContainer = document.querySelector("#location");

    for( const locations in dptosLocs ) {
        if( event.target.value === locations ) {
            let counter = 0;

            dptosLocs[locations].forEach( location => {
                if( counter < 1 ) {
                    locationsContainer.innerHTML = `<option value="${location}">${location}</option>`;
                    counter++;
                } else {
                    locationsContainer.innerHTML += `<option value="${location}">${location}</option>`;
                }
            });

        } else if( event.target.value === '' ) {
            locationsContainer.innerHTML = '';
        }
    }
}

function sendSuccessMessage( element, message ) {
    element.style.borderColor = "red";
    let messageContainer = document.createElement("div");
    messageContainer.classList.add("form__error");
    messageContainer.textContent = message;
    element.parentElement.appendChild(messageContainer);
}

function sendErrorMessage( element, message ) {
    element.style.borderColor = "red";
    let messageContainer = document.createElement("div");
    messageContainer.classList.add("form__error");
    messageContainer.textContent = message;
    element.parentElement.appendChild(messageContainer);
}