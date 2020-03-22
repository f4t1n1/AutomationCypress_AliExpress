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
})
});

describe('Item Page',()=>{
	it('Select Item & Add to Cart',()=>{
		const item = new Item();
    item.clickCart();

    const signIn = new Account();
	signIn.clickCartSignInLink();
	cy.wait(6000);
	cy.get('#alibaba-login-box').then(function ($element) { 
		const $body = $element.contents().find('body') 
		const cyElement = cy.wrap($body) 
		cyElement.find('#fm-login-id').type('era7@yahoo.com')
		const cyElement1 = cy.wrap($body)
		cyElement1.find('#fm-login-password').type('password1234')
		const cyElement2 = cy.wrap($body)
		cyElement2.find('#login-form > div.fm-btn > button').click()
	})

	cy.wait(7000);
	item.viewCart();

	})
});

  describe('Checkout Page',()=>{
  	it ('View Cart',()=>{
  		const cart = new Cart();

  	cy.get('#checkout-button')
    	.should('be.visible')

    cy.get('div.captain h2').invoke('text').then((text1)=>{
    	cy.get('#nav-cart-num').invoke('text').should((text2)=>{
    		expect(text1).to.eq('Shopping Cart ('+text2+')')
    	})
    })

  	})
 });
	

    