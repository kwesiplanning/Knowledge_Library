const pageElements = require('../PageLocators/ManagedContentPageLocators.json')

export class ManagedContentActionsPage{

    NavigateToPage() {
        cy.visit('admin/manage-contents')
    }

    VerifyPage()
    {
        cy.get(pageElements.locators.manageContentH1).should('contain','Managed contents')
        cy.get(pageElements.locators.titleTxtBx).should('be.visible')
        cy.get(pageElements.locators.alternativeTxtBx).should('be.visible')
        cy.get(pageElements.locators.contentTypeDrpDwn).should('be.visible')
        cy.get(pageElements.locators.publishedStatusDrpDwn).should('be.visible')
        cy.get(pageElements.locators.readingListDrpDwn).should('be.visible')
        cy.get(pageElements.locators.seriesDrpDwn).should('be.visible')
        cy.get(pageElements.locators.classificationsTxtBx).should('be.visible')
        cy.get(pageElements.locators.docIDTxtBx).should('be.visible')
        cy.get(pageElements.locators.modifiedDateFromTxtBx).should('be.visible')
        cy.get(pageElements.locators.modifiedDateToTxtBx).should('be.visible')
        cy.get(pageElements.locators.publicationDateFromTxtBx).should('be.visible')
        cy.get(pageElements.locators.publicationDateToTxtBx).should('be.visible')
    }

    EnterTextIntoFolderTxtBx(text)
    {
        cy.get(pageElements.locators.folderTxtBx).type(text)
    }

    EnterTextIntoTitleTxtBx(text)
    {
        cy.get(pageElements.locators.titleTxtBx).clear()
        cy.get(pageElements.locators.titleTxtBx).type(text)
    }

    ClickSearchBtn()
    {
        cy.get(pageElements.locators.searchBtn).click()
    }

    ClickSelectAllCheckbx(){
        cy.get(pageElements.locators.selectAllChkBx).click()
    }

    DeleteDocumentAtIndex(index)
    {
        cy.get(`tbody > :nth-child(${index}) > .views-field-views-bulk-operations-bulk-form`).click()
        cy.get(`:nth-child(${index}) > .views-field-operations > .dropbutton-wrapper > .dropbutton-widget > .dropbutton > .edit > a`).click({force: true})
        cy.get('#edit-delete').click({force: true})
        cy.get('.ui-dialog-buttonset > .button--primary').click()

    }

    //TODO: Clean up this code
    DeletCompoundDocumentAtIndex()
    {
        cy.get('tbody > :nth-child(1) > .views-field-title').contains('Automated Test Compound Doc')
        cy.get(':nth-child(1) > .views-field-operations > .dropbutton-wrapper > .dropbutton-widget > .dropbutton > .dropbutton-toggle > .dropbutton__toggle').scrollIntoView({ offset: { top: 0, left: 50 } })
        cy.get('#edit-views-bulk-operations-bulk-form-0').click({force: true})
        cy.get('#edit-delete').click({force: true})
        cy.get('.ui-dialog-buttonset > .button--primary').click()
        cy.get('tbody > :nth-child(1) > .views-field-title > a').contains('Automated Test Compound Doc').should('not.exist')
    }

    NavigateToCompoundDoc()
    {
        cy.get(pageElements.locators.titleTxtBx).type('Automated Test Compound Doc')
        cy.get(pageElements.locators.searchBtn).click()
        cy.get('tbody > :nth-child(1) > .views-field-title').contains('Automated Test Compound Doc').click()
    }

    SelectFooterActions(Action)
    {
        cy.get(pageElements.locators.actionDropDown).select(Action, { force:true })
    }

    ClickApplyToSelectedItems()
    {
       cy.get(pageElements.locators.applyToSelectedItemsBtn).click()
    }

    VerifySatusMessage()
    {
        cy.get('.messages--status').should('contain','Status message')
        cy.get('.messages--status').should('contain','Delete entities')
    }

    CheckDocumentCountAndDelete()
    {
        cy.get(pageElements.locators.vboTable)
        .invoke('text')
        .then((text) => {

            if(text.match("No content available.")){
                cy.log(`No Documents were found`)
            }else{
                this.ClickSelectAllCheckbx()
                this.SelectFooterActions('Delete selected entities / translations')
                this.ClickApplyToSelectedItems()
            }
        })
    }
}