const pageElements = require ('../PageLocators/AdminHomePageLocators.json')

export class AdminHomePageLoginActions {

    VerifyPage(){
        //cy.get(pageElements.locators.titleH1TEXT).should('be.visible')
        cy.get(pageElements.locators.viewTab).should('be.visible')
        cy.get(pageElements.locators.shortCutsTab).should('be.visible')
        cy.get(pageElements.locators.activityTab).should('be.visible')
        cy.get(pageElements.locators.editTab).should('be.visible') 
        cy.get(pageElements.locators.submissionsTab).should('be.visible')
        cy.get(pageElements.locators.manageDisplayTab).should('be.visible') 
        cy.get(pageElements.locators.savedSearches).should('be.visible')
        cy.get(pageElements.locators.developerTab).should('be.visible')                      
        return
    }
}