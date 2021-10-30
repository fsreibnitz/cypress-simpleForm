/// <reference types="cypress" />


var Chance = require('chance')
var chance = new Chance()

describe('Cadastro', () => {
	it('Quando preencho o formulario, então o cadastro deve ser efetuado ', () => {
		cy.visit('https://form-agilizei.netlify.app/')
		
		cy.get('input[name=firstName]').type(chance.first())
		cy.get('input[name=lastName]').type(chance.last())
		
		cy.get('textArea[name=adress]').type(chance.address())
		
		cy.get('input[name=emailAdress]').type(chance.email())
		cy.get('input[value=m]').check()
		
		cy.get('input[type=checkbox]').check('Netflix')
		cy.get('input[type=checkbox]').check('Livros')
		
		cy.get('select#countries').select('Hong Kong', {force: true})
		cy.get('select#years').select('2020',{force: true})
		cy.get('select#months').select(chance.date().getMonth(),{force: true})
		cy.get('select#days').select(chance.date().getDay(),{force: true})
		
		cy.get('input#firstpassword').type('Teste123')
		cy.get('input#secondpassword').type('Teste123')
		cy.get('button#submitbtn').click()

    cy.url().should('contain','listagem')
		cy.get('table tbody tr').should('have.length',1)



	});
});