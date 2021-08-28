
import { PokemonList } from '../utils/pokemon-list'
describe('home page pokedex prepare to detail', () => {
    it('search pokemon charizard', () => {
        cy.visit('/search')
        PokemonList.forEach(pokemon => {            
            cy.get('app-search-bar').within(() => {
                cy.get('input').type(`${pokemon}{enter}`)
            })
        });
    })
})