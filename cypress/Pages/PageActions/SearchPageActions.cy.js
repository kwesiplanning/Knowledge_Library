const pageElements = require('../../Pages/PageLocators/SearchPageLocators.json')

export class SearchPageActions{
        
    NavigateToPage() {     
        cy.visit('search-library')
    } 

    VerifyPage(){
        cy.get(pageElements.locators.titleH1TEXT).should('contain','Search library')
        cy.get(pageElements.locators.searchBannerBox).should('be.visible')
        cy.get(pageElements.locators.advancedOptions).should('be.visible')
        return
    }

        VerifyPageViaHmPge(){
        cy.get(pageElements.locators.titleH1TEXT).should('contain','Search library')
        cy.get(pageElements.locators.searchTxtBxViaHmPge).should('be.visible')
        cy.get(pageElements.locators.advancedOptions).should('be.visible')
        this.VerifyAdvancedSearchPage()
        this.VerifyPublicationSearch()
        this.VerifyContentTypeSearch()
        this.VerifySeriesTypeSearch()
        this.VerifyClassificationTypeSearch()
        return
    }

    VerifyAdvancedSearchPage(){
        cy.get(pageElements.locators.titleH1TEXT).should('contain','Search library')
        cy.get(pageElements.locators.advancedOptions).should('be.visible')
        return
    }

    VerifyPublicationSearch(){
        cy.get(pageElements.locators.publicationDateHeading).should('be.visible')
        cy.get(pageElements.locators.publicationsDateChkBx).should('be.visible')
        cy.get(pageElements.locators.fct2012).should('be.visible')
        cy.get(pageElements.locators.fct2012_106).should('be.visible')
        return
    }

    VerifyAuthorsSearch(){
        cy.get(pageElements.locators.authorsDrpDwn).should('be.visible')
        cy.get(pageElements.locators.authorsHMPCkBx).should('be.visible')
        cy.get(pageElements.locators.authorsHMPLbl).should('be.visible')
        cy.get(pageElements.locators.authorsHMPCount).should('be.visible')
        return
    }

    VerifyContentTypeSearch(){
        cy.get(pageElements.locators.contentTypeHeading).should('be.visible')
        return
    }

    VerifySeriesTypeSearch(){
        cy.get(pageElements.locators.seriesTypeHeading).should('be.visible')
        return
    }

    VerifyClassificationTypeSearch(){
        cy.get(pageElements.locators.seriesTypeHeading).should('be.visible')
        return
    }

    ClickAdvancedSearchFilters()
    {
        cy.get(pageElements.locators.advancedOptions).click()
        return
    }

    ClickSearchBtn(){
        cy.get(pageElements.locators.searchBtn).click()
        return
    }

    ClickSmartMatchRdBtn(){
        cy.get(pageElements.locators.smartRdBtn).check()
        return
    }
    
    ClickExactMatchRdBtn(){
        cy.get(pageElements.locators.exactRdBtn).check()
        return
    }

    SelectPublicationDateFacetCheckBox(){
        cy.get(pageElements.locators.publicationDateDrpDwn).click()
        cy.get(pageElements.locators.publicationShowMoreLink).click()
        cy.get(pageElements.locators.publicationsDateChkBx).check()
        return
    }

    SelectAuthorsFacetCheckBox(){
        cy.get(pageElements.locators.authorsDrpDwn).click()
        cy.get(pageElements.locators.authorsShowMoreLink).click()
        cy.get(pageElements.locators.authorsHMPCkBx).check()
        return
    }

    MatchesFound(count){
        cy.get(pageElements.locators.matchesFoundTxt).should('contain',count)
        return
    }
}