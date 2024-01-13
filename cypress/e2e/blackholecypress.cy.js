
describe('Practicar con Cypress', () => {
	beforeEach(() => {
		cy.visit('https://testpages.eviltester.com/styled/index.html');
	});
  it(' TC1-Verificar el texto de un item', () => {
   cy.get('h1').should('contain.text','Practice Applications and Pages For Automating and Testing')
  })
  it('TC2-Verificar la seccion de ejemplos', () => {
    cy.get('#basicpagetest').click()
  })
})