const pageElements = require('../../PageLocators/Admin/AddCompoundDocumentPageLocators.json')

export class AddCompoundDocumentPageActions{

    NavigateToPage()
    {

    }

    VerifyPage()
    {
        cy.get(pageElements.locators.titleH1TEXT).should('be.visible').and("contain","Add  Compound Document")
        cy.get(pageElements.locators.generalTab).should('be.visible').and("contain","General")
        cy.get(pageElements.locators.documentsTab).should('be.visible').and("contain","Documents")
        cy.get(pageElements.locators.categoriesTab).should('be.visible').and("contain","Categories")
        cy.get(pageElements.locators.archiveTab).should('be.visible').and("contain","Archive")
        cy.get(pageElements.locators.inputTitleLbl).should('be.visible').and("contain","Title")
        cy.get(pageElements.locators.inputTitleTxtBx).should('be.visible')
        cy.get(pageElements.locators.alternativeTitleLbl).should('be.visible').and("contain","Alternative Title")
        cy.get(pageElements.locators.inputAlternativeTitleTxtBx).should('be.visible')
        cy.get(pageElements.locators.publicationsDateLbl).should('be.visible').and("contain","Publication Date")
        cy.get(pageElements.locators.publicationsDateSelector).should('be.visible') 
        cy.get(pageElements.locators.bodyLbl).should('be.visible').and("contain","Body")
        cy.get(pageElements.locators.bodyTxtBx).should('be.visible')
        cy.get(pageElements.locators.generalNotesLbl).should('be.visible').and("contain","General Notes")
        cy.get(pageElements.locators.generalNotesTxtBx).should('be.visible')
        cy.get(pageElements.locators.showRowWeightingsLink).should('be.visible').and("contain","Show row weights")
        cy.get(pageElements.locators.bestBetLbl).should('be.visible').and("contain","Best Bet")
        cy.get(pageElements.locators.bestBetTxtBx).should('be.visible')
        cy.get(pageElements.locators.bestBetRemoveBtn).should('be.visible')
        cy.get(pageElements.locators.addAnotherItemBtn).should('be.visible')
        cy.get(pageElements.locators.whatsNewSchldDateLbl).should('be.visible').and("contain","Whats New Scheduled Date")
        cy.get(pageElements.locators.whatsNewDateSelector).should('be.visible')
        cy.get(pageElements.locators.publishedChkBx).should('be.visible')
        cy.get(pageElements.locators.saveSection, {force: true}).contains('Save')
        return
    }

    VerifyTabs()
    {
        cy.get(pageElements.locators.documentsTab).click()
        this.VerifyDoumentsTab()
        cy.get(pageElements.locators.categoriesTab).click()
        this.VerifyCategoriesTab()
        cy.get(pageElements.locators.archiveTab).click()
        this.VerifyArchivedTab()
        cy.get(pageElements.locators.generalTab).click()
        return
    }

    VerifyGeneralTab()
    {
        cy.get(pageElements.locators.inputTitleLbl).should('is.visible')
        cy.get(pageElements.locators.inputTitleTxtBx).should('is.visible')
        cy.get(pageElements.locators.alternativeTitleLbl).should('is.visible')
        cy.get(pageElements.locators.inputAlternativeTitleTxtBx).should('is.visible')
        cy.get(pageElements.locators.publicationsDateLbl).should('is.visible')
        cy.get(pageElements.locators.publicationsDateSelector).should('is.visible')
        cy.get(pageElements.locators.bodyLbl).should('is.visible')
        cy.get(pageElements.locators.bodyTxtBx).should('is.visible')     
        return     
    }

    VerifyDoumentsTab()
    {
        cy.get(pageElements.locators.docsShowRowWeightingsLink).should('is.visible')
        cy.get(pageElements.locators.docsInputDocTxtBx).should('is.visible')
        cy.get(pageElements.locators.docsRemoveBtn).should('is.visible')
        cy.get(pageElements.locators.docsTableDragCntrl).should('is.visible')
        cy.get(pageElements.locators.docsAddAnotherItem).should('is.visible')
        cy.get(pageElements.locators.docsPublishedChkBx).should('is.visible')
        cy.get(pageElements.locators.docsPublishedLbl).should('is.visible')
        cy.get(pageElements.locators.docsSaveBtn).should('is.visible')     
        return     
    }

    VerifyCategoriesTab()
    {
        cy.get(pageElements.locators.catDocFolderLbl).should('is.visible')
        cy.get(pageElements.locators.catDocFolderDrpDwn).should('is.visible')
        cy.get(pageElements.locators.catClassLbl).should('is.visible')
        cy.get(pageElements.locators.catClassHintTxt).should('is.visible')
        cy.get(pageElements.locators.catClassInput).should('is.visible')
        cy.get(pageElements.locators.catReadListLbl).should('is.visible')
        cy.get(pageElements.locators.catReadListHintTxt).should('is.visible')
        cy.get(pageElements.locators.catSeriesLbl).should('is.visible')
        cy.get(pageElements.locators.catSeriesHintTxt).should('is.visible')
        cy.get(pageElements.locators.catSeriesTxtBx).should('is.visible')
        cy.get(pageElements.locators.catAuthrosLbl).should('is.visible')
        cy.get(pageElements.locators.catAuthorsHintTxt).should('is.visible')
        cy.get(pageElements.locators.catAuthorsTxtBx).should('is.visible')
        cy.get(pageElements.locators.catSecurityLbl).should('is.visible')
        cy.get(pageElements.locators.catSecurityDrpDwn).should('is.visible')
        cy.get(pageElements.locators.catVolumeLbl).should('is.visible')
        cy.get(pageElements.locators.catVolumeTxtBx).should('is.visible')
        return
    }

    VerifyArchivedTab()
    {
        cy.get(pageElements.locators.archivedLbl).should('is.visible')
        cy.get(pageElements.locators.acrhiveChkBx).should('is.visible')
        cy.get(pageElements.locators.archivedDate).should('is.visible')
        cy.get(pageElements.locators.archivedDateSelector).should('is.visible')
        cy.get(pageElements.locators.archivedNoteLbl).should('is.visible')
        cy.get(pageElements.locators.archivedNoteTxtBx).should('is.visible')
        return
    }

    VerifyInheritance(){
        cy.get(pageElements.locators.catDocFolderDrpDwn).contains('Test Folder DELETE')
        cy.get(pageElements.locators.catClassSpan1).contains('Affordable Housing Obligation Appeal')
        cy.get(pageElements.locators.catClassSpan2).contains('Planning Appeal')
        //cy.get(pageElements.locators.catReadListSpan1).contains('DEFRA: Common Land - Guidance')    
        cy.get(pageElements.locators.catSeriesSpan1).contains('Briefing Paper Number 07283')   
        cy.get(pageElements.locators.catSeriesSpan2).contains('Circular and Clarification Letters')          
        cy.get(pageElements.locators.catAuthorSpan1).contains('AA - Automobile Association') 
        cy.get(pageElements.locators.catAuthorSpan2).contains('Aboricultural Association')   
        //cy.get(pageElements.locators.catVolumeTxtBx).contains('Test volume for inheritance')       
    }

    ClickSave()
    {   
        cy.get(pageElements.locators.saveSection, {force: true})
        .contains('Save')
        .click({force:true, waitForAnimations:false, animationDistanceThreshold: 20})
    }

    AddTitleText(text)
    {
        cy.get(pageElements.locators.inputTitleTxtBx).type(text)
        return
    }

    AddAlternativeTitleText(text)
    {
        cy.get(pageElements.locators.inputAlternativeTitleTxtBx).type(text)
        return
    }

    // This tricky to do as the locator is dynamic and changes when text is entered
    AddAlternativeTitleTextWithPreviousValue(text)
    {
        cy.get(pageElements.locators.inputAlternativeTxtBxWithValue).type(text)
        return
    }

    AddBodyText(text)
    {
        cy.get(pageElements.locators.bodyTxtBx).type(text)
        return
    }

    AddGeneralNotesText(text)
    {
        cy.get(pageElements.locators.generalNotesTxtBx).type(text)
        return
    }

    AddBestBetText(text)
    {
        cy.get(pageElements.locators.bestBetTxtBx).type(text)
        return
    }

    AddReadingListText(text)
    {
        //TBD
        return
    }   

    SelectTab(tabTitle)
    {
    switch(tabTitle){
        case 'Generaltab':
            cy.get(pageElements.locators.generalTab).click()
            break;
        case 'DocumentsTab':
            cy.get(pageElements.locators.documentsTab).click()
            break;
        case 'CategoriesTab':
            cy.get(pageElements.locators.categoriesTab).click()
            break;
        case 'ArchiveTab':
            cy.get(pageElements.locators.archiveTab).click()
            break;
        default:
            cy.get(pageElements.locators.generalTab).click()
        }
    return
    }

    SelectFolderDropDown(folderName)
    {
        cy.get(pageElements.locators.catDocFolderDrpDwn).select(folderName)
        return
    }

    // Compound Doc added
}