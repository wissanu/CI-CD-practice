

context('thrid test', () => {

    const withTextCompareOptions = {
		failureThreshold: 0.05,
		failureThresholdType: 'percent' // not actually percent - fraction
	};
	const withMuchTextCompareOptions = {
		failureThreshold: 0.08,
		failureThresholdType: 'percent' // not actually percent - fraction
	};
	const toolboxCompareOptions = {
		failureThreshold: 40,
		failureThresholdType: 'pixel'
	};

    it('brush selected', () => {
		cy.get('.tool[title="Brush"]').click();
		cy.get('.tools-component').matchImageSnapshot(toolboxCompareOptions);
	});
	it('select selected', () => {
		cy.get('.tool[title="Select"]').click();
		cy.get('.tools-component').matchImageSnapshot(toolboxCompareOptions);
	});
	it('magnifier selected', () => {
		cy.get('.tool[title="Magnifier"]').click();
		cy.get('.tools-component').matchImageSnapshot(toolboxCompareOptions);
	});

    beforeEach(()=> {
		if (Cypress.$('.window:visible')[0]) {
			cy.get('.window:visible .window-close-button').click();
			cy.get('.window').should('not.be.visible');
		}
	});

});