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

let docTitle1 = "Test document 1";
let date1 = "";
let docTitle2 = "Test document 2";
let date2 = "";
let docTitle3 = "Test document 3";
let date3 = "";
let docTitle4 = "Test document 4";
let date4 = "";

describe('Document Functionality as: ADMIN', () => {

  beforeEach(() => {
    cy.Login()
    homePageActions.NavigateToPage()
  })
  
  after(() => {
    // Navigate once, then search and delete each doc created during testing
    homePageActions.NavigateToPage()
    homePageActions.ClickManagedContentsLink()
    cy.TestCleanUp() 
  }) 

  it('[TEST_SETUP] : Create a compound doc with multiple docs', ()=>{
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
      addDocumentPageActions.AddDocTitle(docTitle1)
      addDocumentPageActions.AddAlternativeTitleText(" 4 Alternative Title")
      date1 = addDocumentPageActions.AddPublicationDate(1)
      addDocumentPageActions.ClickSave()
      addCompoundDocumentPageActions.ClickSave()
      compoundDocMetaDataPageActions.SelectEditTab()

      compoundDocMetaDataPageActions.ClickNewDocumentButton()
      addDocumentPageActions.AttachFile('SampleDOC.docx')
      addDocumentPageActions.AddDocTitle(docTitle2)
      addDocumentPageActions.AddAlternativeTitleText(" 3 Alternative Title")
      date2 = addDocumentPageActions.AddPublicationDate(2)
      addDocumentPageActions.ClickSave()
      addCompoundDocumentPageActions.ClickSave()
      compoundDocMetaDataPageActions.SelectEditTab()

      compoundDocMetaDataPageActions.ClickNewDocumentButton()
      addDocumentPageActions.AttachFile('SampleDOC.docx')
      addDocumentPageActions.AddDocTitle(docTitle3)
      addDocumentPageActions.AddAlternativeTitleText(" 2 Alternative Title")
      date3 = addDocumentPageActions.AddPublicationDate(3)
      addDocumentPageActions.ClickSave()
      addCompoundDocumentPageActions.ClickSave()
      compoundDocMetaDataPageActions.SelectEditTab()

      compoundDocMetaDataPageActions.ClickNewDocumentButton()
      addDocumentPageActions.AttachFile('SampleDOC.docx')
      addDocumentPageActions.AddDocTitle(docTitle4)
      addDocumentPageActions.AddAlternativeTitleText(" 1 Alternative Title")
      date4 = addDocumentPageActions.AddPublicationDate(4)
      addDocumentPageActions.ClickSave()
      addCompoundDocumentPageActions.ClickSave() 
      compoundDocMetaDataPageActions.SelectEditTab()
  })

   it('[TEST_SETUP]: Select stickines for documents', ()=>{
        managedContentsPageActions.NavigateToPage()
        managedContentsPageActions.NavigateToCompoundDoc()
        compoundDocMetaDataPageActions.SelectEditTab()
        compoundDocMetaDataPageActions.SelectTab("Documents")
        compoundDocMetaDataPageActions.SelectStickyChkBx(3)
        compoundDocMetaDataPageActions.SaveEditedDocs()
        compoundDocMetaDataPageActions.VerifyDocsAndDates(docTitle4, date4.toString(), docTitle3, date3.toString(), docTitle2, date2.toString(), docTitle1, date1.toString())
        compoundDocMetaDataPageActions.SelectSortByOrder('Asc')
        compoundDocMetaDataPageActions.clickApplySort()
        compoundDocMetaDataPageActions.VerifyDocsAndDates(docTitle4, date4.toString(), docTitle1, date1.toString(), docTitle2, date2.toString(), docTitle3, date3.toString())
    })

  it('Create a compound doc with one doc => Check sort dropdown is available', ()=>{
      managedContentsPageActions.NavigateToPage()
      managedContentsPageActions.NavigateToCompoundDoc()
      compoundDocMetaDataPageActions.VerifySortDropDowns()
  })

  it('Create a compound doc with multiple docs => Check default sort order is publication date', ()=>{
      managedContentsPageActions.NavigateToPage()
      managedContentsPageActions.NavigateToCompoundDoc()
      compoundDocMetaDataPageActions.VerifyDocsAndDates(docTitle4, date4.toString(), docTitle3, date3.toString(), docTitle2, date2.toString(), docTitle1, date1.toString())
  })

  it('Create a compound doc with multiple docs => Check sort order by title', ()=>{
      managedContentsPageActions.NavigateToPage()
      managedContentsPageActions.NavigateToCompoundDoc()
      compoundDocMetaDataPageActions.SelectSortBy('Title')
      compoundDocMetaDataPageActions.SelectSortByOrder('Asc')
      compoundDocMetaDataPageActions.clickApplySort()
      compoundDocMetaDataPageActions.VerifyDocsAndDates(docTitle1, date1.toString(), docTitle2, date2.toString(), docTitle3, date3.toString(), docTitle4, date4.toString())
  })

  it('Create a compound doc with multiple docs => Check sort order by Alternative title', ()=>{
      managedContentsPageActions.NavigateToPage()
      managedContentsPageActions.NavigateToCompoundDoc()
      compoundDocMetaDataPageActions.SelectSortBy('Alternative Title')
      compoundDocMetaDataPageActions.SelectSortByOrder('Asc')
      compoundDocMetaDataPageActions.clickApplySort()
      compoundDocMetaDataPageActions.VerifyDocsAndDates(docTitle4, date4.toString(), docTitle3, date3.toString(), docTitle2, date2.toString(), docTitle1, date1.toString())
  })

  it('Create a compound doc with multiple docs => Check sort order by Alternative title then back to default', ()=>{
      managedContentsPageActions.NavigateToPage()
      managedContentsPageActions.NavigateToCompoundDoc()
      compoundDocMetaDataPageActions.SelectSortBy('Alternative Title')
      compoundDocMetaDataPageActions.SelectSortByOrder('Asc')
      compoundDocMetaDataPageActions.clickApplySort()
      compoundDocMetaDataPageActions.VerifyDocsAndDates(docTitle4, date4.toString(), docTitle3, date3.toString(), docTitle2, date2.toString(), docTitle1, date1.toString())
      compoundDocMetaDataPageActions.SelectSortBy('Date (default)')
      compoundDocMetaDataPageActions.clickApplySort()
      compoundDocMetaDataPageActions.VerifyDocsAndDates(docTitle1, date1.toString(), docTitle2, date2.toString(), docTitle3, date3.toString(), docTitle4, date4.toString())
  })
})