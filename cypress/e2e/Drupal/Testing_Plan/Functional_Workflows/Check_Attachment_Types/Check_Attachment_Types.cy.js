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

  after(() => {
    // Navigate once, then search and delete each doc created during testing
    homePageActions.NavigateToPage()
    homePageActions.ClickManagedContentsLink()
    cy.TestCleanUp() 
  })

    it('Create a document with a Word attachment', ()=>{
      homePageActions.ClickAddContentLink()
      addContentPageActions.ClickDocumentLink()
      addDocumentPageActions.CreateDocumentWithAttachment('Test Folder DELETE', 'SampleDoc.docx', 'Sample text document with Word attachment')
      metadataPageActions.VerifyDocPage()
  })

    it('Create a document with a Text attachment', ()=>{
      homePageActions.ClickAddContentLink()
      addContentPageActions.ClickDocumentLink()
      addDocumentPageActions.CreateDocumentWithAttachment('Test Folder DELETE', 'SampleTEXT.txt', 'Sample text document with Text attachment')
      metadataPageActions.VerifyDocPage()
  })

     it('Create a document with a PowerPoint attachment', ()=>{
      homePageActions.ClickAddContentLink()
      addContentPageActions.ClickDocumentLink()
      addDocumentPageActions.CreateDocumentWithAttachment('Test Folder DELETE', 'SamplePPPresentation.pptx', 'Sample text document with PowerPoint attachment')
      metadataPageActions.VerifyDocPage()
  })

      it('Create a document with a PDF attachment', ()=>{
      homePageActions.ClickAddContentLink()
      addContentPageActions.ClickDocumentLink()
      addDocumentPageActions.CreateDocumentWithAttachment('Test Folder DELETE', 'SamplePDF.pptx', 'Sample text document with PDF attachment')
      metadataPageActions.VerifyDocPage()
  })

       it('Create a document with a PNG attachment', ()=>{
      homePageActions.ClickAddContentLink()
      addContentPageActions.ClickDocumentLink()
      addDocumentPageActions.CreateDocumentWithAttachment('Test Folder DELETE', 'SamplePNG.PNG', 'Sample text document with PNG attachment')
      metadataPageActions.VerifyDocPage()
  }) 

      it('Create a document with a MP4 attachment', ()=>{
      homePageActions.ClickAddContentLink()
      addContentPageActions.ClickDocumentLink()
      addDocumentPageActions.CreateDocumentWithAttachment('Test Folder DELETE', 'SampleMP4.mp4', 'Sample text document with MP4 attachment')
  })  
 
       it('Create a document with a Jpeg attachment', ()=>{
      homePageActions.ClickAddContentLink()
      addContentPageActions.ClickDocumentLink()
      addDocumentPageActions.CreateDocumentWithAttachment('Test Folder DELETE', 'SampleJpeg.jpg', 'Sample text document with Jpeg attachment')
      metadataPageActions.VerifyDocPage()
  })

      it('Create a document with a GIF attachment', ()=>{
      homePageActions.ClickAddContentLink()
      addContentPageActions.ClickDocumentLink()
      addDocumentPageActions.CreateDocumentWithAttachment('Test Folder DELETE', 'SampleGIF.gif', 'Sample text document with GIF attachment')
      metadataPageActions.VerifyDocPage()
  }) 
})