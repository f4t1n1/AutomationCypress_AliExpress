class SearchResult {
	
	clickItem() {
	const item = cy.get('#root > div > div > div.main-content > div.right-menu > div > div.gallery-wrap.product-list > ul > div:nth-child(1) > li:nth-child(2) > div > div.product-img > div > a > img');
	item.click();
	
	}

}

export default SearchResult;
