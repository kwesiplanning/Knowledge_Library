const pageElements = require('../../Pages/PageLocators/HomePageLocators.json')
const homeUrl = ''

export class HomePageActions{

    NavigateToPage() {
        cy.visit(homeUrl)
        return
    }

        VerifyPage(){
        cy.get(pageElements.user.PInsGuidanceBtn).should('be.visible')
        cy.get(pageElements.user.TopicListsBtn).should('be.visible')
        cy.get(pageElements.user.LegislationandCaseLawBtn).should('be.visible')
        cy.get(pageElements.user.GovtGuidanceBtn).should('be.visible')
        cy.get(pageElements.user.NewAndUpdatedBtn).should('be.visible')
        cy.get(pageElements.user.GovtGuidanceBtn).should('be.visible')
        cy.get(pageElements.user.JournalsBtn).should('be.visible')
        cy.get(pageElements.user.InfrastructureAndApplicationsBtn).should('be.visible')
        cy.get(pageElements.user.SOSAndSpecialistCaseWorkBtn).should('be.visible')
        cy.get(pageElements.user.LocalPlansBtn).should('be.visible')
        
        cy.get(pageElements.user.homePageLogoBtn).should('be.visible') 
        cy.get(pageElements.user.itmLink).should('be.visible') 
        cy.get(pageElements.user.pinsNotesLink).should('be.visible')
        cy.get(pageElements.user.nppfLink).should('be.visible')      
        cy.get(pageElements.user.ppgLink).should('be.visible')     
        cy.get(pageElements.user.tcpa1990Link).should('be.visible')
        cy.get(pageElements.user.gpdoLink).should('be.visible')
        cy.get(pageElements.user.UCO).should('be.visible')     
        cy.get(pageElements.user.DMPO).should('be.visible')     
        cy.get(pageElements.user.pa2008Link).should('be.visible') 
        cy.get(pageElements.user.journalsLink).should('be.visible') 
        return
    }

    ClickLogo(){
        cy.get(pageElements.user.homePageLogoBtn).click()
        return
    }

    ClickTCPA1990Link(){
        cy.get(pageElements.user.tcpa1990Link).click()
        return
    }
    
    ClickPA2008Link(){
        cy.get(pageElements.user.pa2008Link).click()
        return
    }

    ClickTopicsBtn(){
        cy.get(pageElements.user.TopicListsBtn).click()
        return
    }

    ClickLegislationAndCaselawBtn(){
        cy.get(pageElements.user.LegislationandCaseLawBtn).click()
        return
    }

    ClickWhatsNewBtn(){
        cy.get(pageElements.user.NewAndUpdatedBtn).click()
        return
    }

    ClickSearchBtn(){
        cy.get(pageElements.user.searchBtn).click()
        return
    }

    SearchLibrary(searchTerm){
        cy.get(pageElements.user.searchTextBox).type(searchTerm)
        cy.get(pageElements.user.searchBtn).click()
        return
    }

    //Admin Actions
    ClickAddContentLink(){
        cy.get(pageElements.user.AddContentsLinkAdmin).click()
        return
    }

    ClickManagedContentsLink(){
        cy.get(pageElements.user.managedContentLinkAdmin).click()
        return
    }

    ClickToSignOut(){
        cy.get(pageElements.user.adminBarUser).should('be.visible').click()
        cy.get(pageElements.user.signOutBtn).should('be.visible').click()
        return
    }

}