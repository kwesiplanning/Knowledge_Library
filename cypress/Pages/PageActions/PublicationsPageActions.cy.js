const pageElements = require('../../Pages/PageLocators/PublicationPageLocators.json')

export class PublicationsPageActions{

    NavigateToPage(){
        cy.visit('publications')
      }

      VerifyPage(){
        cy.get(pageElements.locators.titleH1TEXT ).contains('Publications')
      }

      VerifyFolders(){
          cy.get(pageElements.locators.pinAdviceLink).contains(pageElements.locators.pinAdviceText)
          cy.get(pageElements.locators.legAndCaseLink).contains(pageElements.locators.legAndCaseText)
          cy.get(pageElements.locators.govPubLink).contains(pageElements.locators.govPubText)
          cy.get(pageElements.locators.natInfraLink).contains(pageElements.locators.natInfraText)
          cy.get(pageElements.locators.stakeHoldLink).contains(pageElements.locators.stakeHoldText)
          cy.get(pageElements.locators.jorPlanEnvLink).contains(pageElements.locators.jorPlanEnvText)
          cy.get(pageElements.locators.townAndCounLink).contains(pageElements.locators.townAndCounText)
          cy.get(pageElements.locators.hardCopLink).contains(pageElements.locators.hardCopText)
        }
}