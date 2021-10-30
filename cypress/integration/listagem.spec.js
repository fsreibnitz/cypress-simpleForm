/// <reference types="cypress" />
describe('Listagem', () => {
	it('Quando não houver cadastros, a Listagem deve estar vazia', () => {
		cy.fixture('listagem-vazia').then(data => {
			window.localStorage.setItem('data', JSON.stringify(data))

		})
		cy.visit('https://form-agilizei.netlify.app/listagem.html')
		cy.get('table tbody tr').should('have.length',0)
	});

	it('Quando houver um ou mais cadastros, a Listagem deve estar preenchida', () => {
		cy.fixture('listagem-com-itens').then(data => {
			window.localStorage.setItem('data', JSON.stringify(data))

		})
		cy.visit('https://form-agilizei.netlify.app/listagem.html')
		cy.get('table tbody tr').should('have.length',1)


	});
});