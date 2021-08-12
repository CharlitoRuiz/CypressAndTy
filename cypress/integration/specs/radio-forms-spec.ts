//This is spec file, inside your google-search.spec.ts
import { RadioForm } from '../../page-objects/radio-forms.page';
const radiopage = new RadioForm();
const generoRadio = "Female"
const grupoEdad = 1

beforeEach('Abrir la pagina de radio', () => {
    cy.visit("https://www.seleniumeasy.com/test/basic-radiobutton-demo.html")
})

describe('RadioButtoms Forms', () => {
    it('Single Checkbox',() => {
        radiopage.radioGenero(generoRadio);
        radiopage.btnValorCheck();
        radiopage.lblGenero().should('have.text', "Radio button '" + generoRadio + "' is checked");
    });

    it('Seleccionar genero y grupo edad',()=>{
        radiopage.radioGeneroEdad(generoRadio, grupoEdad);
        radiopage.btnGetGeneroEdad();
        radiopage.lblGeneroEdad().should('contain.text', "Sex : " + generoRadio);
    })
});