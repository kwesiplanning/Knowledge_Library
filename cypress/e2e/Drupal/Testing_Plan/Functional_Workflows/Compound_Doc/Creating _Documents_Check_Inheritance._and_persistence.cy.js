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

  it('Create a compound doc with ONE child doc => Verify doc folder drop down is NOT visible', ()=>{
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
      addDocumentPageActions.VerifyDocDropDownNotVisible()
      addDocumentPageActions.AttachFile('SampleDOC.docx')
      addDocumentPageActions.AddDocTitle('Check Doc Folder Drop Down NOT Visible')
      addDocumentPageActions.ClickSave()
      addCompoundDocumentPageActions.ClickSave()
      compoundDocMetaDataPageActions.SelectEditTab()
      compoundDocMetaDataPageActions.ClickDeleteButton()
      deletePopupActions.ClickAcceptButton()
  })

    it('Create a document => Verify doc folder drop down IS visible', ()=>{
      homePageActions.VerifyPage()
      homePageActions.ClickAddContentLink()
      addContentPageActions.VerifyPage()
      addContentPageActions.ClickDocumentLink()
      addDocumentPageActions.VerifyDocDropDownIsVisible()
      addDocumentPageActions.AttachFile('SampleDOC.docx')   
      addDocumentPageActions.AddDocTitle('Check Doc Folder Drop Down is Visible')
      addDocumentPageActions.ClickSave()
      documentMetaDataPageActions.SelectTab('Delete')  
      documentMetaDataPageActions.DeleteDocument()
  })

    it('Create a normal document with a hyperlink => Verify hyper link works', ()=>{
      homePageActions.VerifyPage()
      homePageActions.ClickAddContentLink()
      addContentPageActions.VerifyPage()
      addContentPageActions.ClickDocumentLink()
      addDocumentPageActions.VerifyDocDropDownIsVisible()
      addDocumentPageActions.AddExternalLink('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', 'OrangeHRM Testing Page')
      addDocumentPageActions.AddDocTitle('Add a link but no document')
      addDocumentPageActions.ClickSave()
      documentMetaDataPageActions.OpenExternalLink()
      documentMetaDataPageActions.VerifyExternalLinkPage()
      managedContentsPageActions.NavigateToPage()
      managedContentsPageActions.DeleteDocumentAtIndex(1)
  }) 

   it('Create a compound doc with multiple child docs_Delete some docs => Verify deleted docs are NOT persisted', ()=>{
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
      addDocumentPageActions.VerifyDocDropDownNotVisible()
      addDocumentPageActions.AttachFile('SampleDOC.docx')
      addDocumentPageActions.AddDocTitle('Test document 1')
      addDocumentPageActions.ClickSave()
      addCompoundDocumentPageActions.ClickSave()
      compoundDocMetaDataPageActions.SelectEditTab()

      compoundDocMetaDataPageActions.ClickNewDocumentButton()
      addDocumentPageActions.VerifyDocDropDownNotVisible()
      addDocumentPageActions.AttachFile('SampleDOC.docx')
      addDocumentPageActions.AddDocTitle('Test document 2')
      addDocumentPageActions.ClickSave()
      addCompoundDocumentPageActions.ClickSave()
      compoundDocMetaDataPageActions.SelectEditTab()

      compoundDocMetaDataPageActions.ClickNewDocumentButton()
      addDocumentPageActions.VerifyDocDropDownNotVisible()
      addDocumentPageActions.AttachFile('SampleDOC.docx')
      addDocumentPageActions.AddDocTitle('Test document 3')
      addDocumentPageActions.ClickSave()
      addCompoundDocumentPageActions.ClickSave()
      compoundDocMetaDataPageActions.SelectEditTab()

      compoundDocMetaDataPageActions.ClickNewDocumentButton()
      addDocumentPageActions.VerifyDocDropDownNotVisible()
      addDocumentPageActions.AttachFile('SampleDOC.docx')
      addDocumentPageActions.AddDocTitle('Test document 4')
      addDocumentPageActions.ClickSave()
      addCompoundDocumentPageActions.ClickSave()
      compoundDocMetaDataPageActions.SelectEditTab()
      compoundDocMetaDataPageActions.SelectDoumentsTab()
      compoundDocMetaDataPageActions.RemoveDoument()
      compoundDocMetaDataPageActions.RemoveDoument()
      compoundDocMetaDataPageActions.RemoveDoument()
      cy.wait(2000)
      compoundDocMetaDataPageActions.SaveEditedDocs()
      compoundDocMetaDataPageActions.VerifyDocsThatArePersisted()
  })
})

describe('Document Inheritance as: ADMIN', () => {

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

  it('Create a compound doc => Verify inheritance', ()=>{
      homePageActions.ClickAddContentLink()
      addContentPageActions.ClickCompoundDocumentLink()
      addCompoundDocumentPageActions.AddTitleText('Automated Test Compound Doc NO Child Doc')
      addCompoundDocumentPageActions.AddBodyText('Test Body Text')
      addCompoundDocumentPageActions.AddGeneralNotesText('Test General Notes Text')
      addCompoundDocumentPageActions.AddBestBetText('Test Best Bet Text')
      addCompoundDocumentPageActions.SelectTab('CategoriesTab')
      addCompoundDocumentPageActions.SelectFolderDropDown('Test Folder DELETE')
      addCompoundDocumentPageActions.VerifyInheritance()
      addCompoundDocumentPageActions.ClickSave()
      //Volume cannot be verified on the document creation page so I am verifying it on the metadata page after creation
      compoundDocMetaDataPageActions.VerifyInheritanceAfterCreateTest()  
  })

  it('Create a document => Verify inheritance', ()=>{
      homePageActions.ClickAddContentLink()
      addContentPageActions.ClickDocumentLink()
      addDocumentPageActions.AddDocTitle('Automated Test Document to check inheritance')
      addDocumentPageActions.SelectDocFolder('Test Folder DELETE')
      addDocumentPageActions.ClickSave()
      documentMetaDataPageActions.VerifyInheritance()
  })

  it('Create a compound doc with ONE child doc => Verify inheritance in the child document', ()=>{
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
  })

  it('Create a compound doc => Reading lists are not inherited by child doc', ()=>{
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
      addDocumentPageActions.AddDocTitle('Check Doc Folder Drop Down is Visible')
      addDocumentPageActions.ClickSave()
      addCompoundDocumentPageActions.ClickSave()
      compoundDocMetaDataPageActions.SelectEditTab()
      compoundDocMetaDataPageActions.ClickDeleteButton()
      deletePopupActions.ClickAcceptButton()
  })

})