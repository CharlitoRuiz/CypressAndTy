//This is spec file, inside your google-search.spec.ts
import { ProgressBarForm } from '../../page-objects/progress-bar.page';
const progresspage = new ProgressBarForm();

beforeEach('Abrir la pagina de radio', () => {
    cy.visit("https://www.seleniumeasy.com/test/jquery-download-progress-bar-demo.html");
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })
})

describe('Progress bar', () => {
    it('JQuery progress bar',() => {
        progresspage.btnDescargar();
        cy.wait(4000);

        while (!progresspage.lblDescargaCompleta().should('contain.text', "Complete")) {
            progresspage.btnCerrar();
        }
    });
});