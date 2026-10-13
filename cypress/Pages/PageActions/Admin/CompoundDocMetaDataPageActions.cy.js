const pageElements = require('../../PageLocators/MetaDataLocators/CompoudDocMetaDataPageLocators.json');
const pageElementsAfterCreate = require('../../PageLocators/MetaDataLocators/CompoudDocMetaDataAfterCreatePageLocators.json');

export class CompoundDocMetaDataPageActions{

    SelectEditTab() {
        cy.get(pageElements.locators.edit_Tab).click()
    }

    SelectTab(tabTitle) {

        switch(tabTitle){
            case 'Documents':
            cy.get(pageElementsAfterCreate.locators.documents_Tab).click()
            break; 
        default:
            cy.console.log("Enter a valid tab title");     
        }          
    }

    SelectRowWeight(){
        cy.get(pageElementsAfterCreate.locators.showRowWeight).click()
    }

    SelectRowWeightDropDown()
    {
        cy.get(pageElementsAfterCreate.locators.rowWeights0).select('3')
        cy.get(pageElementsAfterCreate.locators.rowWeights1).select('1')
        cy.get(pageElementsAfterCreate.locators.rowWeights2).select('2')
        cy.get(pageElementsAfterCreate.locators.rowWeights3).select('0')
    }

    SelectStickyChkBx(numbChkBx)
    {
        switch(numbChkBx){
            case 0 :
                    cy.get(pageElementsAfterCreate.locators.stickyChkBx0).then(($checkbox) => {
                        if (!$checkbox.is(':checked')) {
                            cy.wrap($checkbox).click();
                        }
                    });
                break;
            case 1 :
                    cy.get(pageElementsAfterCreate.locators.stickyChkBx1).then(($checkbox) => {
                        if (!$checkbox.is(':checked')) {
                            cy.wrap($checkbox).click();
                        }
                    });
                break;
            case 2 :
                    cy.get(pageElementsAfterCreate.locators.stickyChkBx2).then(($checkbox) => {
                        if (!$checkbox.is(':checked')) {
                            cy.wrap($checkbox).click();
                        }
                    });
                break;
            case 3 :
                    cy.get(pageElementsAfterCreate.locators.stickyChkBx3).then(($checkbox) => {
                        if (!$checkbox.is(':checked')) {
                            cy.wrap($checkbox).click();
                        }
                    });
                break;
        }
    }

    RemoveDoument() {
        cy.get(pageElementsAfterCreate.locators.doc_Tab_Remove1).click()
        cy.get('.ajax-progress__message').should('be.visible')
    }

    SaveEditedDocs(){
        cy.get(pageElementsAfterCreate.locators.save_Btn).click()
    }

    ClickDeleteButton() {
        cy.get(pageElements.locators.delete_Btn).click()
    }

    ClickNewDocumentButton() {
        cy.get(pageElements.locators.newDocument_Btn).click()
    }

    VerifyInheritanceTest(){
        cy.get(pageElements.locators.titleH1TEXT).contains('Automated Test Compound Doc NO Child Doc')
        cy.get(pageElements.locators.Alt_Title).contains('Alternative Title')
        cy.get(pageElements.locators.Alt_Title_Value).contains('Inherit this alternative title for TESTING')
        cy.get(pageElements.locators.classification_Lbl).contains('Classification')
        cy.get(pageElements.locators.classification_Value1).contains('Affordable Housing Obligation Appeal')
        cy.get(pageElements.locators.classification_Value2).contains('Planning Appeal')
        cy.get(pageElements.locators.series_Lbl).contains('Series')
        cy.get(pageElements.locators.series_Value1).contains('Briefing Paper Number 07283')
        cy.get(pageElements.locators.series_Value2).contains('Circular and Clarification Letters')
        cy.get(pageElements.locators.volume_Lbl).contains('Volume')
        cy.get(pageElements.locators.volume_Value).contains('Test volume for inheritance')
        cy.get(pageElements.locators.readingList_Lbl).contains('Reading Lists')
        cy.get(pageElements.locators.readingList_Value1).contains('DEFRA: Common Land - Guidance')
        //cy.get(pageElements.locators.authors_Lbl).contains('Authors')
        //cy.get(pageElements.locators.authors_Value1).contains('AA - Automobile Association')
        cy.get(pageElements.locators.authors_Value2).contains('Aboricultural Association')
        cy.get(pageElements.locators.docFolder_Lbl).contains('Doc Folder')
        cy.get(pageElements.locators.docFolder_Value1).contains('Test Folder DELETE')
        cy.get(pageElements.locators.archived_Lbl).contains('Archived')
        cy.get(pageElements.locators.archived_Value).contains('No')
        cy.get(pageElements.locators.security_Classification_Lbl).contains('Security classification')
        cy.get(pageElements.locators.security_Classification_Value).contains('Official')
    }

        VerifyInheritanceAfterCreateTest(){
        cy.get(pageElementsAfterCreate.locators.titleH1TEXT).contains('Automated Test Compound Doc NO Child Doc')
        cy.get(pageElementsAfterCreate.locators.Alt_Title).contains('Alternative Title')
        cy.get(pageElementsAfterCreate.locators.Alt_Title_Value).contains('Inherit this alternative title for TESTING')
        cy.get(pageElementsAfterCreate.locators.classification_Lbl).contains('Classification')
        cy.get(pageElementsAfterCreate.locators.classification_Value1).contains('Affordable Housing Obligation Appeal')
        cy.get(pageElementsAfterCreate.locators.classification_Value2).contains('Planning Appeal')
        cy.get(pageElementsAfterCreate.locators.series_Lbl).contains('Series')
        cy.get(pageElementsAfterCreate.locators.series_Value1).contains('Briefing Paper Number 07283')
        cy.get(pageElementsAfterCreate.locators.series_Value2).contains('Circular and Clarification Letters')
        cy.get(pageElementsAfterCreate.locators.volume_Lbl).contains('Volume')
        cy.get(pageElementsAfterCreate.locators.volume_Value).contains('Test volume for inheritance')
        cy.get(pageElementsAfterCreate.locators.readingList_Lbl).contains('Reading Lists')
        cy.get(pageElementsAfterCreate.locators.readingList_Value1).contains('DEFRA: Common Land - Guidance')
        //cy.get(pageElementsAfterCreate.locators.authors_Lbl).contains('Authors')
        //cy.get(pageElementsAfterCreate.locators.authors_Value1).contains('AA - Automobile Association')
        cy.get(pageElementsAfterCreate.locators.authors_Value2).contains('Aboricultural Association')
        cy.get(pageElementsAfterCreate.locators.docFolder_Lbl).contains('Doc Folder')
        cy.get(pageElementsAfterCreate.locators.docFolder_Value1).contains('Test Folder DELETE')
        cy.get(pageElementsAfterCreate.locators.archived_Lbl).contains('Archived')
        cy.get(pageElementsAfterCreate.locators.archived_Value).contains('No')
        cy.get(pageElementsAfterCreate.locators.security_Classification_Lbl).contains('Security classification')
        cy.get(pageElementsAfterCreate.locators.security_Classification_Value).contains('Official')
    }

    VerifyDocsThatArePersisted()
    {
        cy.get(pageElementsAfterCreate.locators.childDocument).contains('Test document 4')
        cy.get(pageElementsAfterCreate.locators.childDocument).should('not.include.text', 'Test document 3')
        cy.get(pageElementsAfterCreate.locators.childDocument).should('not.include.text', 'Test document 2')
        cy.get(pageElementsAfterCreate.locators.childDocument).should('not.include.text', 'Test document 1')
    }

    VerifyDocsAndDates(docValue1, date1, docValue2, date2, docValue3, date3, docValue4, date4)
    {
        cy.get(pageElementsAfterCreate.locators.childDocumentTitle1).contains(docValue1)
        cy.get(pageElementsAfterCreate.locators.childDocumentDate1).should('include.text', date1)
        cy.get(pageElementsAfterCreate.locators.childDocumentTitle2).contains(docValue2)
        cy.get(pageElementsAfterCreate.locators.childDocumentDate2).should('include.text', date2) 
        cy.get(pageElementsAfterCreate.locators.childDocumentTitle3).contains(docValue3)
        cy.get(pageElementsAfterCreate.locators.childDocumentDate3).should('include.text', date3)
        cy.get(pageElementsAfterCreate.locators.childDocumentTitle4).contains(docValue4)
        cy.get(pageElementsAfterCreate.locators.childDocumentDate4).should('include.text', date4)
    }

    VerifySortDropDowns()
    {
        cy.get(pageElementsAfterCreate.locators.sortByDrpDwn).should('be.visible')
        cy.get(pageElementsAfterCreate.locators.sortOrderDrpDwn).should('be.visible')
        cy.get(pageElementsAfterCreate.locators.applyBtn).should('be.visible')
    }

    SelectSortBy(value)
    {
        cy.get(pageElementsAfterCreate.locators.sortByDrpDwn).select(value)
    }

    SelectSortByOrder(value)
    {
        cy.get(pageElementsAfterCreate.locators.sortOrderDrpDwn).select(value)
    }

    clickApplySort()
    {
        cy.get(pageElementsAfterCreate.locators.applyBtn).click()
    }

}