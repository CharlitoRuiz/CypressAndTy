//Inside your google-search.page.ts file. This is pageobject file.
/// <reference types="cypress" />


export class RadioForm{

    radioGenero(genero){
        
        if (genero == "Male") {
            genero = 2;
        } else{
            genero = 3
        }

        return cy.get('.panel-body > :nth-child('+ genero +') > input').click();
    }

    btnValorCheck(){
        return cy.get('#buttoncheck').click();
    }

    lblGenero(){
        return cy.get('.radiobutton');
    }

    radioGeneroEdad(genero, grupoEdad){
        
        if (genero == "Male") {
            genero = 2;
        } else{
            genero = 3
        }

        cy.get('.panel-body > :nth-child(2) > :nth-child(' + genero + ') > input').click();
        cy.get(':nth-child(3) > :nth-child(3) > input').click();
    }

    btnGetGeneroEdad(){
        return cy.get('.panel-body > .btn').click();
    }

    lblGeneroEdad(){
        return cy.get('.groupradiobutton');
    }
}