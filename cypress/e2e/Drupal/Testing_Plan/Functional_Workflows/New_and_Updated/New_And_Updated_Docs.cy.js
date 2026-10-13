import { ScreenCapture } from '../../../../../Pages/ScreenCapture/ScreenCapture.js';
import { CookiePageActions } from '../../../../../Pages/PageActions/CookieActions.cy.js';
import { HomePageActions } from '../../../../../Pages/PageActions/HomePageActions.cy.js';
import { LoginPageActions } from '../../../../../Pages/PageActions/LoginPageActions.cy.js';
import { ITMPageActions } from '../../../../../Pages/PageActions/ITMPageActons.cy.js';
import { PINSNotesPageActions } from '../../../../../Pages/PageActions/PINSNotesPageActions.cy.js';
import { NPPFPageActions } from '../../../../../Pages/PageActions/NPPFPageActions.cy.js';
import { PPGPageActions } from '../../../../../Pages/PageActions/PPGPageActions.cy.js';
import { SearchPageActions } from '../../../../../Pages/PageActions/SearchPageActions.cy.js';
import { TopicsPageActions } from '../../../../../Pages/PageActions/TopicsPageActions.cy.js';
import { PublicationsPageActions } from '../../../../../Pages/PageActions/PublicationsPageActions.cy.js';
import { WhatsNewPageActions } from '../../../../../Pages/PageActions/WhatsNewPageActions.cy.js';
import { AccessPageActions } from '../../../../../Pages/PageActions/Folders/AccessPageActions.cy.js';
import { MetaDataPageActions } from '../../../../../Pages/PageActions/MetaDataPageActions.cy.js';
import { ManagedContentActionsPage } from '../../../../../Pages/PageActions/ManagedContentsPageActions.cy.js';
import { AdminHomePageLoginActions } from '../../../../../Pages/PageActions/AdminHomePageLoginActions.cy.js';
import { AddContentPageActions } from '../../../../../Pages/PageActions/Admin/AddContentPageActions.cy.js';
import { AddCompoundDocumentPageActions } from '../../../../../Pages/PageActions/Admin/AddCompoundDocumentPageActions.cy.js';
import { CompoundDocMetaDataPageActions } from '../../../../../Pages/PageActions/Admin/CompoundDocMetaDataPageActions.cy.js';
import { DeletePopupActions } from '../../../../../Pages/PageActions/Admin/DeletePopupActions.cy.js';
import { AddDocumentPageActions } from '../../../../../Pages/PageActions/Admin/AddDocumentPageActions.cy.js';
import { DocumentMetaDataPageActions } from '../../../../../Pages/PageActions/DocumentMetaDataPageActions.cy.js';


let screenCapture = new ScreenCapture;
let cookiePageActions = new CookiePageActions;
let homePageActions = new HomePageActions;
let loginPageActions = new LoginPageActions;
let iTMPageActions = new ITMPageActions;
let pinsNotesPageActions = new PINSNotesPageActions;
let nppfPageActions = new NPPFPageActions;
let ppgPageActions = new PPGPageActions;
let searchPageActions = new SearchPageActions;
let topicsPageActions = new TopicsPageActions;
let publicationsPageActions = new PublicationsPageActions;
let whatsNewPageActions = new WhatsNewPageActions;
let accessPageActions = new AccessPageActions;
let metadataPageActions = new MetaDataPageActions;
let managedContentsPageActions = new ManagedContentActionsPage;
let adminHomePageLoginActions = new AdminHomePageLoginActions;
let addContentPageActions = new AddContentPageActions;
let addCompoundDocumentPageActions = new AddCompoundDocumentPageActions;
let compoundDocMetaDataPageActions = new CompoundDocMetaDataPageActions;
let deletePopupActions = new DeletePopupActions;
let addDocumentPageActions = new AddDocumentPageActions;
let documentMetaDataPageActions = new DocumentMetaDataPageActions;


describe('Compound Doc Functionality as ADMIN', () => {

  beforeEach(() => {
    cy.Login()
    homePageActions.NavigateToPage()
  })

    it('Create a compound doc with NO child doc => Verify it is FIRST in New and Updated ', ()=>{
      homePageActions.VerifyPage()
      homePageActions.ClickAddContentLink()
      addContentPageActions.VerifyPage()
      addContentPageActions.ClickCompoundDocumentLink()
      addCompoundDocumentPageActions.VerifyPage()
      addCompoundDocumentPageActions.AddTitleText('Automated Test Compound Doc for New and Updated')
      addCompoundDocumentPageActions.AddBodyText('Test Body Text')
      addCompoundDocumentPageActions.AddGeneralNotesText('Test General Notes Text')
      addCompoundDocumentPageActions.AddBestBetText('Test Best Bet Text')
      addCompoundDocumentPageActions.SelectTab('CategoriesTab')
      addCompoundDocumentPageActions.SelectFolderDropDown('Test Folder DELETE')
      addCompoundDocumentPageActions.ClickSave()
      whatsNewPageActions.NavigateToPage()
      whatsNewPageActions.VerifyPage()
      whatsNewPageActions.VerifyFirstItemInListIsNOTExpected('Automated Test Compound Doc for New and Updated')
  })

    it('Create a compound doc with ONE child doc => Verify Compound doc is displayed FIRST NOT Child', ()=>{
      homePageActions.VerifyPage()
      homePageActions.ClickAddContentLink()
      addContentPageActions.VerifyPage()
      addContentPageActions.ClickCompoundDocumentLink()
      addCompoundDocumentPageActions.VerifyPage()
      addCompoundDocumentPageActions.AddTitleText('Automated Test Compound Doc and Child Doc')
      addCompoundDocumentPageActions.AddAlternativeTitleText('Test Alternative Title Text') // May not be inheriting alt title correctly
      addCompoundDocumentPageActions.AddBodyText('Test Body Text')
      addCompoundDocumentPageActions.AddGeneralNotesText('Test General Notes Text')
      addCompoundDocumentPageActions.AddBestBetText('Test Best Bet Text')
      addCompoundDocumentPageActions.SelectTab('CategoriesTab')
      addCompoundDocumentPageActions.SelectFolderDropDown('Test Folder DELETE')
      addCompoundDocumentPageActions.ClickSave()
      managedContentsPageActions.NavigateToPage()
      managedContentsPageActions.NavigateToCompoundDoc()
      compoundDocMetaDataPageActions.SelectEditTab()
      compoundDocMetaDataPageActions.ClickNewDocumentButton()
      addDocumentPageActions.AttachFile('SampleDOC.docx')
      addDocumentPageActions.AddDocTitle('Test Child Doc Title')
      addDocumentPageActions.ClickSave()
      addCompoundDocumentPageActions.ClickSave()
      whatsNewPageActions.NavigateToPage()
      whatsNewPageActions.VerifyFirstItemInListIsExpected('Automated Test Compound Doc and Child Doc')

  })

    it('Create a normal document => Verify document is displayed FIRST', ()=>{
      homePageActions.VerifyPage()
      homePageActions.ClickAddContentLink()
      addContentPageActions.VerifyPage()
      addContentPageActions.ClickDocumentLink()
      addDocumentPageActions.VerifyDocDropDownIsVisible()
      addDocumentPageActions.SelectDocFolder('Test Folder DELETE')
      cy.wait(4000) // Waiting for the doc folder selection to load properly before attaching file
      addDocumentPageActions.AttachFile('SampleDOC.docx')  
      cy.wait(4000) // Waiting for file to be attahced properly before adding title
      addDocumentPageActions.AddDocTitle('Check Document is FIRST in New and Updated')
      addDocumentPageActions.ClickSave()
      whatsNewPageActions.NavigateToPage()
      whatsNewPageActions.VerifyFirstItemInListIsExpected('Check Document is FIRST in New and Updated')
  })

})