const pageElements = require('../../PageLocators/Admin/DeletePopupLocators.json');

export class DeletePopupActions{

    VerifyPopup() {
        cy.get(pageElements.locators.popup_H1).should('be.visible').and("contain", "Are you sure you want to delete");
        cy.get(pageElements.locators.popup_Txt).should('be.visible').and("contain", "This action cannot be undone.");
    }

    ClickAcceptButton() {
        cy.get(pageElements.locators.popup_Accept_Btn).click()
    }
}