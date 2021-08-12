//Inside your google-search.page.ts file. This is pageobject file.
/// <reference types="cypress" />


export class ProgressBarForm{
    
    btnDescargar(){
        return cy.get('#downloadButton').click();
    }

    lblDescargaCompleta(){
        return cy.get('.progress-label');
    }

    btnCerrar(){
        return cy.get('.ui-dialog-buttonset > button').click();
    }
}