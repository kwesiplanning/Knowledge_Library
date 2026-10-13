const pageElements = require('../../PageLocators/Admin/AddContentPageLocators.json')

export class AddContentPageActions{

    VerifyPage(){
        cy.get(pageElements.locators.titleH1TEXT).should('be.visible')
        cy.get(pageElements.locators.articleLink).should('be.visible')
        cy.get(pageElements.locators.basicPageLink).should('be.visible')
        cy.get(pageElements.locators.classificationShortCutLink).should('be.visible')
        cy.get(pageElements.locators.compoundDocumentLink).should('be.visible')
        cy.get(pageElements.locators.document).should('be.visible')
        cy.get(pageElements.locators.hardCopyLink).should('be.visible')
        cy.get(pageElements.locators.hardCopyLoanLink).should('be.visible')
        cy.get(pageElements.locators.klHardcopyLink).should('be.visible')
        cy.get(pageElements.locators.pDFLink).should('be.visible')
        cy.get(pageElements.locators.articleLink).should('be.visible')
        cy.get(pageElements.locators.shortCutLink).should('be.visible')
        cy.get(pageElements.locators.urlLink).should('be.visible')
        cy.get(pageElements.locators.virtualFolderLink).should('be.visible')
        cy.get(pageElements.locators.webformLink).should('be.visible')     
    }

    ClickCompoundDocumentLink(){
        cy.get(pageElements.locators.compoundDocumentLink).click()
    }

    ClickDocumentLink(){
        cy.get(pageElements.locators.document).click()
    }
}