describe('visual testing', () => {
    beforeEach(() => {
        // Start Applitools Visual AI Test
        cy.eyesOpen({
            appName: 'NGX Cypress Test App',
            testName: Cypress.currentTest.title
        })
    })

    afterEach(() => {
        // End Applitools Visual AI Test
        cy.eyesClose()
    })

    it('test with applitools demo app', () => {
        cy.visit(' ')
        cy.eyesCheckWindow({
            tag: "Home page",
        })

        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()
        cy.eyesCheckWindow({
            tag: "Form Layouts",
        })
    }) 

})