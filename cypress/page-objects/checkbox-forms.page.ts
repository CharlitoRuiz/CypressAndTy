//Inside your google-search.page.ts file. This is pageobject file.
/// <reference types="cypress" />


export class CheckForm{

    chkPrimerCheck(){
        return cy.get('#isAgeSelected').click();
    }

    lblMensajeCheck(){
        return cy.get('#txtAge');
    }

    chkUnCheck(numeroCheck){
        return cy.get(':nth-child('+ numeroCheck +') > label > .cb1-element').click();
    }

    btnCheckTodos(){
        return cy.get('#check1').click();
    }
}