
import Homepage from '../page_object/Homepage';
import Account from '../page_object/Account';
import SearchResult from '../page_object/SearchResult';
import Item from '../page_object/Item';
import Cart from '../page_object/Cart';


describe('Search Item', () => {
  it('Type Keyword', () => {
    const home = new Homepage();
    home.visit();
    
    const search = home.typeKeyword("Sweater");
    
    search.clickItem();

    cy.get('#root > div > div > div.main-content > div.right-menu > div > div.gallery-wrap.product-list > ul > div:nth-child(1) > li:nth-child(2) > div > div.product-img > div > a').invoke('removeAttr', 'target').click()

    const item = new Item();
    item.clickCart();

    const signIn = new Account();
	signIn.clickCartSignInLink();
	cy.wait(8000);
	cy.get('#alibaba-login-box').then(function ($element) { 
		const $body = $element.contents().find('body') 
		//const cyElement = cy.wrap($body) 
		//cyElement.find('#fm-login-id').type('era7@yahoo.com')
		const cyElement1 = cy.wrap($body)
		cyElement1.find('#fm-login-password').type('password1234')
		const cyElement2 = cy.wrap($body)
		cyElement2.find('#login-form > div.fm-btn > button').click()
	})

	cy.wait(12000);

	item.clickSuggestion();
	item.clickCart();


})
    
});