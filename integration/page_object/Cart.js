class Cart {
	
	selectAll () {
		const selectionCheckBox = cy.get('#root > div > div > div:nth-child(1) > div.main > div.card-container.captain-container > div > div.select-all-container > label > span.next-checkbox > input');
		selectionCheckBox.click();
	}

}

export default Cart;
