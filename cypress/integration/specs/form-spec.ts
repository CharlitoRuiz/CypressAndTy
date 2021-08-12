//This is spec file, inside your google-search.spec.ts
import { Form } from '../../page-objects/form-page';
const formpage = new Form();

// Variables
const nombre = "Carlos"
const apellido = "Ruiz"
const email = "cruizfreak@hotmail.com"
const telefono = "(506)8529789"
const direccion = "100 norte iglesia"
const ciudad = "San Jose"
const estado = "Iowa"
const codigoPostal = "1001"
const direccionURL = "www.pruebas.com"
const descripcion = "Esto es una prueba hecha por cypress"

beforeEach('Abrir la pagina de radio', () => {
    cy.visit("https://www.seleniumeasy.com/test/input-form-demo.html");
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
})

describe('Information Form', () => {
    it('Contact Form',() => {
        formpage.txtNombre(nombre);
        formpage.txtApellido(apellido);
        formpage.txtEmail(email);
        formpage.txtTelefono(telefono);
        formpage.txtDireccion(direccion);
        formpage.txtCiudad(ciudad);
        formpage.selectEstado(estado);
        formpage.txtZip(codigoPostal);
        formpage.txtUrl(direccionURL);
        formpage.rdHosting();
        formpage.txtDescripcion(descripcion);
        formpage.bntEnviar();
    });
});