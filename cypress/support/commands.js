import { ManagedContentActionsPage } from '../Pages/PageActions/ManagedContentsPageActions.cy'
import { LoginPageActions } from '../Pages/PageActions/LoginPageActions.cy'
import { AdminHomePageLoginActions } from '../Pages/PageActions/AdminHomePageLoginActions.cy'
import { HomePageActions } from '../Pages/PageActions/HomePageActions.cy'

const loginPageActions = new LoginPageActions()
const adminHomePageLoginActions = new AdminHomePageLoginActions()
const homePageActions = new HomePageActions()   
const managedContentsPageActions = new ManagedContentActionsPage()

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
/// <reference types="Cypress" />
//
/// <reference types="cypress-xpath" />
//
// -- This is a parent command --
 Cypress.Commands.add('Login', ( ) => {     
        loginPageActions.NavigateToPage()
        loginPageActions.EnterAdminEmailName()
        loginPageActions.EnterPassword()
        loginPageActions.ClickToSignIn()
        homePageActions.NavigateToPage()
        homePageActions.VerifyPage()
 })
//
//
Cypress.Commands.add('TestCleanUp', () => { 
    const titlesToClean = [
        'Sample text document with Word attachment',
        'Sample text document with Text attachment',
        'Sample text document with PowerPoint attachment',
        'Sample text document with PDF attachment',
        'Sample text document with PNG attachment',
        'Sample text document with MP4 attachment',
        'Sample text document with Jpeg attachment',
        'Sample text document with GIF attachment',
        'Automated Test Document',
        'Automated Test Document for New and Updated',
        'Automated Test Document for New and Updated - Child Doc',
        'Automated Test Document for New and Updated - Child Doc 2',
        'Automated Test Compound Doc NO Child Doc',
        'Automated Test Compound Doc and Child Doc',
        'Automated Test Document to check inheritance',
        'Automated Test Compound Doc for New and Updated',
        'Check Document is FIRST in New and Updated'
    ]     
    
    titlesToClean.forEach((title, index) => {
        managedContentsPageActions.EnterTextIntoTitleTxtBx(title)
        managedContentsPageActions.ClickSearchBtn()
        managedContentsPageActions.CheckDocumentCountAndDelete()
        
        // Brief pause between iterations to avoid race conditions
        if (index < titlesToClean.length - 1) {
            cy.wait(500)
        }
    })
})
//
//
