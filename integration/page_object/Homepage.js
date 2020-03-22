
import Account from '../page_object/Account';
import SearchResult from '../page_object/SearchResult'

class Homepage {

  visit() {
    cy.visit('http://www.aliexpress.com');
  }

  closePopup(){
  	const button = cy.get('body > div.ui-window.ui-window-normal.ui-window-transition.ui-newuser-layer-dialog > div > div > a');
  	button.click();
  }

  clickJoin(){
  	const link = cy.get('#user-benefits > div:nth-child(1) > div.login-status > span.join-btn > a');
  	link.click();
  	const register = new Account();
  	return register;
  }

  clickSignIn(){
  	const link = cy.get('#user-benefits > div:nth-child(1) > div.login-status > span.register-btn > a');
  	link.click();
  	const signIn = new Account();
  	return signIn;
  }

  typeKeyword(value){
  	const keyword = cy.get('#search-key');
  	keyword.clear();
  	keyword.type(value);
  	const submit = cy.get('#form-searchbar > div.searchbar-operate-box > input');
  	submit.click();
  	
  	const search = new SearchResult();
  	return search;
  }
}

export default Homepage;
