// variables
const urlAPI = "https://reqres.in/api/"
const token = "QpwL5tke4Pnpja7X4"
const emailUser = "rachel.howell@reqres.in"
const apiToken = "04942e9c52cc0eaa832cc86bc1e81090"

describe('API Test', () => {
    it('Login User',() => {
        cy.request('POST', urlAPI + "login", 
        {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka"
        })
        .then((response) => {
            expect(response.status).equal(200);
            expect(response.body.token).to.equal(token);
        })
    });

    it('Register User',()=>{
        cy.request('POST', urlAPI + "register", 
        {
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        })
        .then((response)=>{
            expect(response.status).equal(200);
            expect(response.body.token).to.equal(token);
        })
    })

    it('List User',()=>{
        cy.request('GET', urlAPI + "users?page=2")
        .then((response)=>{
            expect(response.status).equal(200);
            expect(response.body.data[5].email).contains(emailUser);
        })
    })

    it('Delete User', () =>{
        cy.request('DELETE', urlAPI + "users/2")
        .then((response)=>{
            expect(response.status).equal(204);
        })
    })

    it('Update User', () =>{
        cy.request('PUT', urlAPI + "users/2", 
        {
            "name": "morpheus",
            "job": "zion resident"
        })
        .then((response)=>{
            expect(response.status).equal(200);
            expect(response.body.name).to.equal("morpheus");
            expect(response.body.job).to.equal("zion resident");
        })
    })

    it('List User with delay', () =>{
        cy.request('GET', urlAPI + "users?delay=3")
        .then((response)=>{
            expect(response.status).equal(200);
        })
    })

    it('Musicxmatch search by Artist',()=>{
        cy.request('GET', "https://api.musixmatch.com/ws/1.1/artist.get?artist_id=118&apikey=" + apiToken)
        .then((response)=>{
            expect(response.status).equal(200);
            expect(response.body).contains("Queen");
        })
    })

    it.only('Delete User Intercept', () =>{
        cy.intercept('DELETE', urlAPI + "users/2",{
            statusCode: 500
        }).as('place');

        cy.wait("@place").then((interception)=>{
            console.log(interception)
        })

        cy.request('DELETE', urlAPI + "users/2")




    })
});