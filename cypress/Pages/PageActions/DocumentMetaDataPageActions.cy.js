const pageElements = require ('../PageLocators/DocumentMetaDataPageLocators.json'); 

export class DocumentMetaDataPageActions{

    SelectTab(option){
        switch(option) {
            case "View":
            cy.get(pageElements.locators.viewTabiewTab).click()
                break;
            case "Edit":
            cy.get(pageElements.locators.editTab).click()
                break;
            case "Manage display":
            cy.get(pageElements.locators.manageDisplayTab).click()
                break;
            case "Delete":
            cy.get(pageElements.locators.deleteTab).click()
                break;
            case "Revisions":
            cy.get(pageElements.locators.revisionsTab).click()
                break;
            case "Clone":
            cy.get(pageElements.locators.cloneTab).click()
                break;
            case "Developer":
            cy.get(pageElements.locators.developerTab).click()
                break;
            default:
            throw new Error("Option provided does not match any available options");
        }
    }
    
    DeleteDocument(){
        cy.get(pageElements.locators.deleteTaBDELETE).click()
    }

    OpenExternalLink(){
        // remove target then click
        cy.get(pageElements.locators.externalLinkUrl)       // adjust selector
        .invoke('removeAttr', 'target')
        .click();
    }

    VerifyExternalLinkPage(){
        cy.origin('https://opensource-demo.orangehrmlive.com', ()=>{
        cy.url().should('include', 'https://opensource-demo.orangehrmlive.com/') 
        })

    }

    VerifyInheritance(){
        //cy.get(pageElements.locators.volumeTEXT).should('have.text', 'Test volume for inheritance')
    }
}