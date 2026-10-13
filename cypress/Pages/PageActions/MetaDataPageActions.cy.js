const pageElementsDoc = require('../PageLocators/MetaDataLocators/DocumentMetaDataPageLocators.json')
const pageElementsCmpDoc = require('../PageLocators/MetaDataLocators/CompoudDocMetaDataPageLocators.json')

export class MetaDataPageActions{

   VerifyDocPage()
    {
        cy.get(pageElementsDoc.locators.titleH1TEXT).should('be.visible')
        cy.get(pageElementsDoc.locators.openDocumentBtn).should('be.visible')
        cy.get(pageElementsDoc.locators.downLoadBtn).should('be.visible')

        cy.get(pageElementsDoc.locators.altTitleTEXT).should('be.visible')
        cy.get(pageElementsDoc.locators.publicationsDateTEXT).should('be.visible')
        cy.get(pageElementsDoc.locators.archivedTEXT).should('be.visible')   
        cy.get(pageElementsDoc.locators.authorsTEXT).should('be.visible') 
        
        cy.get(pageElementsDoc.locators.readinglistTEXT).should('be.visible')   
        cy.get(pageElementsDoc.locators.classificationTEXT).should('be.visible') 
    }

    VerifyCompoundDocPage()
    {
        cy.get(pageElementsCmpDoc.locators.titleH1TEXT).should('be.visible')
        cy.get(pageElementsCmpDoc.locators.subTitleH2TEXT).should('be.visible')

        cy.get(pageElementsCmpDoc.locators.columnHd1_Title).should('be.visible')
        cy.get(pageElementsCmpDoc.locators.columnHd2_Alt_Title).should('be.visible')
        cy.get(pageElementsCmpDoc.locators.columnHd3_Pub_Date).should('be.visible')
        cy.get(pageElementsCmpDoc.locators.columnHd4_Authors).should('be.visible')

        cy.get(pageElementsCmpDoc.locators.Alt_Title).should('be.visible')
        cy.get(pageElementsCmpDoc.locators.classification_Lbl).should('be.visible')
        cy.get(pageElementsCmpDoc.locators.readingList_Lbl).should('be.visible')   
        cy.get(pageElementsCmpDoc.locators.authors_Lbl).should('be.visible')   
        cy.get(pageElementsCmpDoc.locators.archived_Lbl).should('be.visible')
        cy.get(pageElementsCmpDoc.locators.security_Classification_Lbl).should('be.visible')
    }
}