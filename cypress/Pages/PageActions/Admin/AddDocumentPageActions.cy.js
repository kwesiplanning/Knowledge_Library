import 'cypress-file-upload';

const pageElements = require('../../PageLocators/Admin/AddDocumentMetatDataPageLocators.json');

export class AddDocumentPageActions{


    SelectDocFolder(docFolderName){
        cy.get(pageElements.locators.docTypeDropDown).select(docFolderName);
    }

    AttachFile(fileName){
        const fileNameWithoutExtension = fileName.replace(/\..*$/, '');
        cy.get(pageElements.locators.fileUpload).attachFile(fileName);
        cy.get('.file > a')
        .should('include.text',fileNameWithoutExtension)
        .should('be.visible');
    }

    AddDocTitle(docTitle){
        cy.get(pageElements.locators.docTitleTEXT).type(docTitle);
    }

    AddAlternativeTitleText(text)
    {
        cy.get(pageElements.locators.altTitleTEXT).type(text)
    }

    AddExternalLink(url, title){
        cy.get(pageElements.locators.externalLinksUrlTEXT).type(url);
        cy.get(pageElements.locators.externalLinksTitleTEXT).type(title);
    }

    AddPublicationDate(dateIncrement){
        let tomorrow = new Date()
        tomorrow.setDate(tomorrow.getDate() + dateIncrement)
        let returnDate = tomorrow
        const day = String(tomorrow.getDate()).padStart(2, '0')
        const month = String(tomorrow.getMonth() + 1).padStart(2, '0')
        const year = tomorrow.getFullYear()
        tomorrow = `${year}-${month}-${day}`

        cy.get(pageElements.locators.publicationDateSelector).type(tomorrow)

        return day
    }

    VerifyPageInheritance(){
        //cy.get(pageElements.locators.authorsTEXTChoice1).contains('AA - Automobile Association');
        //cy.get(pageElements.locators.authorsTEXTChoice2).contains('Aboricultural Association');
        //cy.get(pageElements.locators.volumeTEXT).contains('Test volume for inheritance');
        cy.get(pageElements.locators.seriesTEXTChoice1).contains('Briefing Paper Number 07283');
        cy.get(pageElements.locators.seriesTEXTChoice2).contains('Circular and Clarification Letters');
        cy.get(pageElements.locators.readingListTEXTChoice1).contains('DEFRA: Common Land - Guidance');
        cy.get(pageElements.locators.classificationTEXTChoice1).contains('--Affordable Housing Obligation Appeal');
        cy.get(pageElements.locators.classificationTEXTChoice2).contains('--Planning Appeal');
    }

    VerifyDocDropDownNotVisible(){
        cy.get(pageElements.locators.docFolderLabelTEXT).should('not.exist');
        cy.get(pageElements.locators.docTypeDropDown).should('not.exist');
    }

    VerifyDocDropDownIsVisible(){
        cy.get(pageElements.locators.docFolderLabelTEXT).should('exist');
        cy.get(pageElements.locators.docTypeDropDown).should('exist');
    }

    ClickSave(){
        cy.get(pageElements.locators.saveBtnFooter).contains('Save').click({force:true, waitForAnimations:false, animationDistanceThreshold: 20});
    }

    CreateDocumentWithAttachment(docFolder, fileName, docTitle){
        this.SelectDocFolder(docFolder);
        this.AttachFile(fileName);
        this.AddDocTitle(docTitle);
        this.AddPublicationDate();
        this.ClickSave();
    }

    CreateDocumentWithAttachmentAndPubDate(docFolder, fileName, docTitle, publicationIncrement){
        this.SelectDocFolder(docFolder);
        this.AttachFile(fileName);
        this.AddDocTitle(docTitle);
        this.AddPublicationDate(publicationIncrement);
        this.ClickSave();
    }
}
