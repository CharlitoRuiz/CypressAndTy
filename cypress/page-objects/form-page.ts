//Inside your google-search.page.ts file. This is pageobject file.
/// <reference types="cypress" />


export class Form{

    txtNombre(nombre){
        return cy.get(':nth-child(2) > .inputGroupContainer > .input-group > .form-control').type(nombre);
    }

    txtApellido(apellido){
        return cy.get(':nth-child(3) > .inputGroupContainer > .input-group > .form-control').type(apellido);
    }

    txtEmail(email){
        return cy.get(':nth-child(4) > .inputGroupContainer > .input-group > .form-control').type(email);
    }

    txtTelefono(telefono){
        return cy.get(':nth-child(5) > .inputGroupContainer > .input-group > .form-control').type(telefono)
    }

    txtDireccion(direccion){
        return cy.get(':nth-child(6) > .inputGroupContainer > .input-group > .form-control').type(direccion)
    }

    txtCiudad(ciudad){
        return cy.get(':nth-child(7) > .inputGroupContainer > .input-group > .form-control').type(ciudad)
    }

    selectEstado(estado){
        return cy.get('.selectContainer > .input-group > .form-control').select(estado);
    }

    txtZip(codigoPostal){
        return cy.get(':nth-child(9) > .inputGroupContainer > .input-group > .form-control').type(codigoPostal);
    }

    txtUrl(direccionURL){
        return cy.get(':nth-child(10) > .inputGroupContainer > .input-group > .form-control').type(direccionURL);
    }

    rdHosting(){
        return cy.get(':nth-child(1) > label > input').click();
    }

    txtDescripcion(descripcion){
        return cy.get(':nth-child(12) > .inputGroupContainer > .input-group > .form-control').type(descripcion);
    }

    bntEnviar(){
        return cy.get('.btn').click();
    }
}