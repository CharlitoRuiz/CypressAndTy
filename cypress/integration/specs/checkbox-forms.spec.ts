//This is spec file, inside your google-search.spec.ts
import { CheckForm } from '../../page-objects/checkbox-forms.page';
const checkpage = new CheckForm();
const numeroCheck = 4

beforeEach('Abrir la pagina de check', () => {
    cy.visit("https://www.seleniumeasy.com/test/basic-checkbox-demo.html")
})

describe('Check Forms', () => {
    it('Single Checkbox',() => {
        checkpage.chkPrimerCheck();
        checkpage.lblMensajeCheck().should('have.text', "Success - Check box is checked");
    });

    it('Click one check', ()=>{
        checkpage.chkUnCheck(numeroCheck);
    })

    it('Click check all buttom', ()=>{
        checkpage.btnCheckTodos();
    })
});