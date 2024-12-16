describe('visual testing', () => {
    beforeEach(() => {
        // Start Applitools Visual AI Test
        cy.eyesOpen({
            appName: 'Playground Cypress Test App',
            testName: Cypress.currentTest.title
        })
    })

    afterEach(() => {
        // End Applitools Visual AI Test
        cy.eyesClose()
    })

    it('test with applitools demo app', () => {
        cy.visit('http://uitestingplayground.com/')
        cy.eyesCheckWindow({
            tag: "Home page",
        })

        cy.contains('Progress Bar').click()
        cy.get('#startButton').click()
        cy.eyesCheckWindow({
            tag: "Form Layouts",
        })
    }) 

})