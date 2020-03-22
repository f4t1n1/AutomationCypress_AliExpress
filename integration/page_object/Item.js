
class Item {
	
	clickCart(){
	
	const selectVariation = cy.get('#root > div > div.product-main > div > div.product-info > div.product-sku > div > div:nth-child(1) > ul > li:nth-child(1) > div');
	selectVariation.click();
	const addToCart = cy.get('#root > div > div.product-main > div > div.product-info > div.product-action > span.addcart-wrap > button');
	
		
		addToCart.click();
	}

	viewCart(){
		const viewCartBtn = cy.get('body > div.next-overlay-wrapper.opened > div.next-dialog.next-closeable.next-overlay-inner.gps-recommend-dialog > div > div > div.addcart-result > div > div.addcart-result-action > a > button');
		viewCartBtn.click();
	}

	clickSuggestion(){
		//const button = cy.get('/html/body/div[14]/div[2]/div/div/div[3]/div/div/div/div[44]/div');
		//button.click();
		const suggestedItem = cy.get('body > div.next-overlay-wrapper.opened > div.next-dialog.next-closeable.next-overlay-inner.gps-recommend-dialog > div > div > div.next-slick.next-slick-outer.next-slick-hoz.gps-recommend-wrap > div > div > div > div:nth-child(35) > div');
		suggestedItem.click();
	}

  
	
}

export default Item;
