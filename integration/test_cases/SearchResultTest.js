
import Homepage from '../page_object/Homepage';
import SearchResult from '../page_object/SearchResult';


describe('Search Item', () => {
  it('Type Keyword', () => {
    const home = new Homepage();
    home.visit();

    
    const search = home.typeKeyword("Sweater");
    cy.wait(5000);
    search.clickItem();

	})

    
})