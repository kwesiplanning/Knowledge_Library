const pageElements = require('../../Pages/PageLocators/TopicsPageLocators.json')

export class TopicsPageActions{

  NavigateToPage(){
    cy.visit('topic_areas')
    return
  }

  VerifyPage(){
    cy.get(pageElements.locators.titleH1TEXT).contains('Topic Lists')
    return
  }

  
  VerifyFolders(){
    // TBD: What will validation of folders look like?
  }
}