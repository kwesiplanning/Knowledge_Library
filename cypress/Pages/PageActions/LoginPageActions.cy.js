import adminLogin from '../../../cypress/fixtures/adminLogin.json'

const pageElements = require('../../Pages/PageLocators/LoginPageLocators.json')


export class LoginPageActions{

    NavigateToPage() {
        cy.visit('user/login')
    } 

    VerifyPage(){
        cy.get(pageElements.locators.signInH1).should('contain','Sign in')
        cy.get(pageElements.locators.createNewAccountTab).should('contain','Create new account')
        cy.get(pageElements.locators.resetYourPasswordTab).should('contain','Reset your password')
        cy.get(pageElements.locators.userNameLabel).should('contain','Username')
        cy.get(pageElements.locators.passwordLabel).should('contain','Password')
    }

    VerifyResetPage(){
        cy.get(pageElements.locators.resetYourPasswordH1).should('contain','Reset your password')
        cy.get(pageElements.locators.emailAddress).should('be.visible')
        cy.get(pageElements.locators.hintTxt).should('contain','Password reset instructions will be sent to your registered email address')
    }

    EnterAdminEmailName(){
       cy.get(pageElements.locators.userNameInput).type(adminLogin.adminEmail)
    }

    EnterDevUserName(){
        cy.get(pageElements.locators.userNameInput).type(adminLogin.devUserName)
    }

    EnterPassword(){
        cy.get(pageElements.locators.passwordInput).type(adminLogin.adminPassword)
    }

    EnterDevPassword(){
        cy.get(pageElements.locators.passwordInput).type(adminLogin.devPassword)
    }

    ClickToSignIn(){
        cy.get(pageElements.locators.signInBtn).click()
    }

    ClickToSignOut(){
        //cy.visit('https://library-test.planninginspectorate.gov.uk/user')
        //cy.get(pageElements.locators.adminSignOutBtn).click()
    }

    ClickAdminBtn(){
        cy.get(pageElements.locators.adminBtn).click()
    }

    ClickToResetPasswordTab(){
        cy.get(pageElements.locators.resetYourPasswordTab).click()
    }

}