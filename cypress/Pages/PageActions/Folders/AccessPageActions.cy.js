const pageElements = require('../../PageLocators/Folders/AccessPageLocators.json')

export class AccessPageActions{

    NavigateToPage()
    {
        cy.visit('https://library-test.planninginspectorate.gov.uk/topic_areas')
    }

    ClickAccessLink()
    {
        cy.get(pageElements.locators.AccessLink).click()
        return
    }

    ClickPositiveManagementIconCompoundDocIcon()
    {
        cy.get(pageElements.locators.PositiveAccessManagementLink).click()
        return
    }

    ClickAccessAndNatureConservationDoc()
    {
        cy.get(':nth-child(1) > .views-field-nothing > a > .govuk-icon').click()
        return
    }

}