//Inside your google-search.page.ts file. This is pageobject file.
/// <reference types="cypress" />


export class InputForms{

    lnkSimpleForms(){
        return cy.get(':nth-child(3) > :nth-child(1) > [href="#"]').click();
    }

    txtMensaje(mensaje){
        return cy.get('.form-group > #user-message').type(mensaje)
    }
    
    btnBuscar(){
        return cy.get('#get-input > .btn').click();
    }

    lblMensaje(){
        return cy.get('#display');
    }

    txtValorA(valorA){
        return cy.get('#sum1').type(valorA);
    }

    txtValorB(valorB){
        return cy.get('#sum2').type(valorB);
    }

    btnTotal(){
        return cy.get('#gettotal > .btn').click();
    }

    lblTotal(){
        return cy.get('#displayvalue');
    }
  }