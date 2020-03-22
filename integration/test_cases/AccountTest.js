
import Homepage from '../page_object/Homepage';
import Account from '../page_object/Account';


describe('Join', () => {

	it('Existing Account', () => {
    const home = new Homepage();
    home.visit();

    const register = home.clickJoin();

    register.fillRegistEmail('era7@yahoo.com').submit();
    cy.wait(3000);
    cy.get('div#ws-xman-register-email-info').invoke('text').then((text1)=>{
    	expect(text1).to.eq('This email already exists.'+'\xa0\xa0'+'Sign In > ')
    })
  });

 it('Valid Registration', () => {

    const register = new Account();

    var email = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)+'@ymail.com';

    register
      .fillRegistEmail(email)
      .fillRegistPassword('123456')
      .submit();

    cy.wait(5000);
    cy.get('#batman-tabbed > div > div.coupon-detail-bottom > a').should('be.visible')

   register.clickShopNow();
    
  });
  
});

describe('Sign Out',()=>{
	it('Valid Sign Out',()=>{
		cy.get('div.user-account-info').trigger('mouseover')
		cy.get('div.flyout-user-signout a').click()
		cy.get('div.user-account-info').trigger('mouseover')
		cy.get('div.flyout-user-signIn > p:nth-child(2) > a').click()
	})
})

describe('Sign In', () =>{
	it('Invalid Sign In', () => {

    cy.get('#alibaba-login-box').then(function ($element) { 
			const $body = $element.contents().find('body') 
			const cyElement = cy.wrap($body)
			cyElement.find('#login-form > div.fm-btn > button').click()

			const cyElement1 = cy.wrap($body)
    		cyElement1.find('div.login-error-msg').invoke('text').then((text1)=>{
    			expect(text1).to.eq('Please enter your email address or member ID.')
    		})	
		})
	});

	it('Valid Sign In',()=>{
		
		cy.get('#alibaba-login-box').then(function ($element) { 
			const $body = $element.contents().find('body') 
			const cyElement = cy.wrap($body) 
			cyElement.find('#fm-login-id').type('era7@yahoo.com')
			const cyElement1 = cy.wrap($body)
			cyElement1.find('#fm-login-password').type('password1234')
			const cyElement2 = cy.wrap($body)
			cyElement2.find('#login-form > div.fm-btn > button').click()
		})

	});
	
});