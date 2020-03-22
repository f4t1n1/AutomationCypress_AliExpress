
class Account {

  fillRegistEmail(value){
  	const field = cy.get('#ws-xman-register-email');
  	field.clear();
  	field.type(value);

  	return this;
  }

  fillRegistPassword(value){
  	const field = cy.get('#ws-xman-register-password');
  	field.clear();
  	field.type(value);

  	return this;
  }

  fillSignInEmail(value) {
    const field = cy.get('#fm-login-id');
    field.clear();
    field.type(value);
    
    return this;
  }

  fillSignInPassword(value) {
    const field = cy.get('#fm-login-password');
    field.clear();
    field.type(value);
    
    return this;
  }

  clickSignInLink(){
  	const button = cy.get('#batman-tabbed > ul > li:nth-child(2)');
  	button.click();
  	
  }

  clickCartSignInLink(){
  	const link = cy.get('#batman-dialog-wrap > div > div > div.next-tabs.next-tabs-pure.next-medium > div.next-tabs-bar > div > div > div > ul > li:nth-child(2) > div');
  	link.click();
  }

  clickSignInButton(){
  	const button = cy.get('#login-form > div.fm-btn > button');
  	button.click();
  }
  
  submit() {
    const button = cy.get('#ws-xman-register-submit');
    button.click();
  }

  clickShopNow(){
  	const button = cy.get('#batman-tabbed > div > div.coupon-detail-bottom > a');
  	button.click();
  }
}

export default Account;
