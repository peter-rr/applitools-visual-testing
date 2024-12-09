describe('visual testing', () => {

    it('test with applitools 5', () => {
        cy.visit('http://localhost:4200/')

        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        
    }) 

})