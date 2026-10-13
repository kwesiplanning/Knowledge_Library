const pageElements = require('../../Pages/PageLocators/WhatsNewPageLocators.json')

export class WhatsNewPageActions {


    NavigateToPage(){
        cy.visit('whats-new')
        return
    }

    VerifyPage(){
       cy.get(pageElements.locators.titleH1TEXT).contains('New and updated publications')
        return
    }

    VerifyFirstItemInListIsExpected(expectedTitle){
        cy.get(pageElements.locators.firstItemInList).then(($el)=>{
            const actualTitle = $el.text().trim()
            expect(actualTitle).to.eq(expectedTitle)
        })
    }

        VerifyFirstItemInListIsNOTExpected(expectedTitle){
        cy.get(pageElements.locators.firstItemInList).then(($el)=>{
            const actualTitle = $el.text().trim()
            expect(actualTitle).to.not.eq(expectedTitle)
        })
    }
}