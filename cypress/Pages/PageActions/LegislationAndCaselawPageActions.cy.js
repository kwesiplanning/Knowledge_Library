const pageElements = require('../PageLocators/LegislationAndCaselawPageLocators.json')

export class LegislationAndCaseLawPageActions{

    NavigateToPage(){
        cy.visit('legislation-caselaw')
      }

      VerifyPage(){
        cy.get(pageElements.user.titleH1TEXT ).contains('Legislation & Caselaw')
      }

      VerifyFolders(){
        // TBD: What will validation of folders look like?
      }
}