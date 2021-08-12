/// <reference types="cypress" />

Cypress.Commands.add('VisitarURL', () =>{
    cy.visit('https://www.seleniumeasy.com/test/basic-first-form-demo.html');
})

Cypress.Commands.add('cerrarVentana', () =>{
    cy.get('.at-cm-no-button').click();
})