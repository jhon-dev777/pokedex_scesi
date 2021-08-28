

describe('home page pokedex prepare to detail', () => {
  it('search pokemon charizard', () => {
    cy.visit('/')
    cy.get('app-search-bar').within(() => {
      cy.get('input').type('charizard{enter}')
    })
    cy.get('mat-dialog-container').within(() => {
      cy.get('button').get('.detail').click()
    })
  })
})
describe('search detail page pokedex view pokemon', () => {
  it('comfirm pokemon', () => {
    cy.get('mat-card').within(() => {
      cy.get('mat-card-header').within(() => {
        cy.get('mat-card-title').contains('charizard')
      })
    })
  })
})

describe('search detail page pokedex view base stat', () => {
  it('tab Base stat', () => {
    cy.get('mat-tab-group').within(() => {
      cy.get('mat-tab-header').within(() => {
        cy.get('div[role=tab]').eq(1).click();
      })
    })
  })
})

describe('search detail page pokedex view moves', () => {
  it('tab Moves', () => {
    cy.get('mat-tab-group').within(() => {
      cy.get('mat-tab-header').within(() => {
        cy.get('div[role=tab]').eq(2).click();
      })
    })
  })
})

describe('search detail page pokedex view types', () => {
  it('tab Types', () => {
    cy.get('mat-tab-group').within(() => {
      cy.get('mat-tab-header').within(() => {
        cy.get('div[role=tab]').eq(0).click();
      })
    })
  })
})

describe('search detail page pokedex search other pokemon', () => {
  it('seach pokemon pikachu', () => {
    cy.get('app-search-bar').within(() => {
      cy.get('input').type('pikachu{enter}')
    })
  })
})

describe('search detail page pokedex view pokemon', () => {
  it('comfirm pokemon', () => {
    cy.get('mat-card').within(() => {
      cy.get('mat-card-header').within(() => {
        cy.get('mat-card-title').contains('pikachu')
      })
    })
  })
})