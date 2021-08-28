
describe('home page pokedex', () => {
    it('Visits the home pokedex', () => {
      cy.visit('/')
      cy.get('app-search-bar').within(() => {
        cy.get('input').should('have.attr', 'placeholder', 'Search pokemon')
      })
    })
})
describe('home page pokedex search', () => {
  it('search pokemon preview to cancel', () => {
    cy.visit('/')
    cy.get('app-search-bar').within(() => {
      cy.get('input').type('pikachu{enter}')
    })
  })
})
describe('home page pokedex detail', () => {
  it('cancel detail pokemon', () => {
    cy.get('mat-dialog-container').within(() => {
      cy.get('button').get('.cancel').click()
    })
  })
})
describe('home page pokedex search', () => {
  it('search empty pokemon', () => {
    cy.visit('/')
    cy.get('app-search-bar').within(() => {
      cy.get('input').type('{enter}')
      cy.on('window:alert', (text) => {
        expect(text).to.contains('not a pokemon');
      });
    })
  })
})
describe('home page pokedex search', () => {
  it('search pokemon preview to detail', () => {
    cy.visit('/')
    cy.get('app-search-bar').within(() => {
      cy.get('input').type('pikachu{enter}')
    })
  })
})
describe('home page pokedex detail', () => {
  it('press detail pokemon', () => {
    cy.get('mat-dialog-container').within(() => {
      cy.get('button').get('.detail').click()
    })
  })
})

