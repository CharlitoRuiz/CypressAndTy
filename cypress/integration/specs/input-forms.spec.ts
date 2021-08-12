//This is spec file, inside your google-search.spec.ts
import { InputForms } from '../../page-objects/input-forms.page';
const imputpage = new InputForms();
const mensaje = "Esto es una prueba de Cy";
const valorA = 5;
const valorB = 17;

beforeEach('Abrir la pagina de input', () => {
    cy.visit("https://www.seleniumeasy.com/test/basic-first-form-demo.html");
})

describe('Input Forms', () => {
    it('Single Input Field',() => {
        imputpage.txtMensaje(mensaje);
        imputpage.btnBuscar();
        imputpage.lblMensaje().should('have.text', mensaje)
    });


    it('Two Input Fields', ()=>{
        imputpage.txtValorA(valorA);
        imputpage.txtValorB(valorB);
        imputpage.btnTotal();
        imputpage.lblTotal().should('have.text', valorA + valorB)
    })
});