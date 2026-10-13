const pageElements = require('../../Pages/PageLocators/CookieLocators.json')

export class CookiePageActions{

    VerifyPage(){
        cy.get(pageElements.locators.cookiesTitle).should('be.visible')   
        cy.get(pageElements.locators.btnAccept).should('be.visible')
        cy.get(pageElements.locators.btnReject).should('be.visible')
        cy.get(pageElements.locators.linkViewCookies).should('be.visible')
    }

    VerifyPageCookiesNotVisible(){
        cy.get(pageElements.locators.cookiesTitle).should('not.be.visible')   
        cy.get(pageElements.locators.btnAccept).should('not.be.visible')
        cy.get(pageElements.locators.btnReject).should('not.be.visible')
        cy.get(pageElements.locators.linkViewCookies).should('not.be.visible')
    }

    AcceptCookies(){
       cy.get(pageElements.locators.btnAccept).click()
    }

    DeclineCookies(){
        cy.get(pageElements.locators.btnReject).click()
    }

}