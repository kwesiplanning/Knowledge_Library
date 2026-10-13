import { ScreenCapture } from '../../../Pages/ScreenCapture/ScreenCapture.js';
import { CookiePageActions } from '../../../Pages/PageActions/CookieActions.cy.js';
import { HomePageActions } from '../../../Pages/PageActions/HomePageActions.cy.js';
import { LoginPageActions } from '../../../Pages/PageActions/LoginPageActions.cy.js';
import { ITMPageActions } from '../../../Pages/PageActions/ITMPageActons.cy.js';
import { PINSNotesPageActions } from '../../../Pages/PageActions/PINSNotesPageActions.cy.js';
import { NPPFPageActions } from '../../../Pages/PageActions/NPPFPageActions.cy.js';
import { PPGPageActions } from '../../../Pages/PageActions/PPGPageActions.cy.js';
import { SearchPageActions } from '../../../Pages/PageActions/SearchPageActions.cy.js';
import { TopicsPageActions } from '../../../Pages/PageActions/TopicsPageActions.cy.js';
import { LegislationAndCaseLawPageActions } from '../../../Pages/PageActions/LegislationAndCaselawPageActions.cy.js';
import { WhatsNewPageActions } from '../../../Pages/PageActions/WhatsNewPageActions.cy.js';
import { AccessPageActions } from '../../../Pages/PageActions/Folders/AccessPageActions.cy.js';
import { MetaDataPageActions } from '../../../Pages/PageActions/MetaDataPageActions.cy.js';
import { ManagedContentActionsPage } from '../../../Pages/PageActions/ManagedContentsPageActions.cy.js';


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
let legislationAndCaseLawPageActions = new LegislationAndCaseLawPageActions;
let whatsNewPageActions = new WhatsNewPageActions;
let accessPageActions = new AccessPageActions;
let metadataPageActions = new MetaDataPageActions;
let managedContentsPageActions = new ManagedContentActionsPage;


describe("Cookie tests",() => { 

beforeEach(() => {
    cy.Login()
    homePageActions.NavigateToPage()
  })

   it('Accept Cookies',()=>{
    cookiePageActions.VerifyPage()
    cookiePageActions.AcceptCookies()
    cookiePageActions.VerifyPageCookiesNotVisible()
   })

   it('Decline Cookies',()=>{
    cookiePageActions.VerifyPage()
    cookiePageActions.DeclineCookies()
    cookiePageActions.VerifyPageCookiesNotVisible()
   }) 
})

describe("Header tests",() => {

beforeEach(() => {
    cy.Login()
    homePageActions.NavigateToPage()
})

 it('1.01 As a user, I can navigate directly to the Inspector Training Manual folder using the ‘ITM’ link',function(){
    iTMPageActions.NavigateToPage()
    iTMPageActions.VerifyPage()
  })

  it('1.02 As a user, I can navigate directly to the PINS Notes folder using the ‘PINS Notes’ link',function(){
    pinsNotesPageActions.NavigateToPage()
    pinsNotesPageActions.VerifyPage()
  })

  //it('1.03 As a user, I can navigate directly to the Town and Country Planning Act 1990 using the \'TCPA 1990\' link',function(){
    // TBD Page not firing the load event within 6000ms 
    //homePageActions.ClickTCPA1990Link()
    // Work out how to verify the opened PDF
  //})

  //it('1.04 As a user, I can navigate directly to the Planning Act 2008 using the \'PA 2008\' link',function(){
    //homePageActions.ClickPA2008Link()
    // Returning 404 Error
  //})

  it('1.05 As a user, I can navigate directly to the National Planning Policy Framework document using the \'NPPF\' link',function(){
    nppfPageActions.NavigateToPage()
    nppfPageActions.VerifyPage()
  })

  it('1.06 As a user, I can navigate directly to the Planning Practice Guidance document/folder using the \'PPG\' link',function(){
    ppgPageActions.NavigateToPage()
    ppgPageActions.VerifyPage()
  })

  it('1.07 As a user, I can navigate to the homepage using the logo in the banner',function(){
    ppgPageActions.NavigateToPage()
    homePageActions.ClickLogo()
    homePageActions.VerifyPage()
  })

  it('1.08 As a user, I can search for a document from the homepage using the quick search in the banner',function(){
    homePageActions.SearchLibrary('Acts')
    searchPageActions.VerifyPage()
    searchPageActions.ClickSearchBtn()
    searchPageActions.MatchesFound('1409')
    searchPageActions.ClickSmartMatchRdBtn()
    searchPageActions.ClickSearchBtn()
    searchPageActions.MatchesFound('1409')
    searchPageActions.ClickExactMatchRdBtn()
    searchPageActions.ClickSearchBtn()
    searchPageActions.MatchesFound('59')
  })
})

describe("TBD Footer tests",() => {  
 //TBD: Footer tests to be added
})

describe("Body(Homepage) tests",() => {   

beforeEach(() => {
    cy.Login()
    homePageActions.NavigateToPage()
})

  it('1.00 As a user, I can view the Library homepage',function(){
    homePageActions.VerifyPage()
  }) 
 
  it('1.00_1 As an Admin user, I can view the Library homepage',function(){
    homePageActions.VerifyPage()
  })

  it('1.10 TBD As a user, I can browse folders and documents using the Topic Areas homepage tile',function(){
    homePageActions.ClickTopicsBtn()
    topicsPageActions.VerifyPage()
    //TODO: Verify  topic page folders
  })

  it('1.11 As a user, I can browse folders and documents using the Publication Types homepage tile',function(){
    homePageActions.ClickLegislationAndCaselawBtn()
    legislationAndCaseLawPageActions.VerifyPage()
    legislationAndCaseLawPageActions.VerifyFolders()
  })

  it('1.12 As a user, I can browse recently added documents on a dedicated page using the What’s New homepage tile',function(){
    homePageActions.ClickWhatsNewBtn()
    whatsNewPageActions.VerifyPage()
  })

  it('1.20 TBD As a user, I can view metadata for a document on its document page',function(){
    // Compound document
    homePageActions.ClickTopicsBtn()
    accessPageActions.ClickAccessLink()
    accessPageActions.ClickAccessAndNatureConservationDoc()
    //metadataPageActions.VerifyDocPage() TODO: Verify metadata within the original tab
  })

  it('1.20.1 As a user, I can view metadata for a compound document on its document page',function(){
    homePageActions.ClickTopicsBtn()
    accessPageActions.ClickAccessLink()
    accessPageActions.ClickPositiveManagementIconCompoundDocIcon()
    metadataPageActions.VerifyCompoundDocPage()
  })

  it('1.21 As an admin, I can log in to the Library',function(){
    homePageActions.VerifyPage()
  })

  it('1.23 As an admin, I can log in to the Library',function(){
    homePageActions.VerifyPage()
    // Duplicate of 1.21 test case
  })

  it('1.24 As an admin, I can upload a document to the Library',function(){
    // TODO
  })
 
  it('TBD 1.25 As an admin, I can add metadata for an uploaded file (cataloguing)',function(){
    homePageActions.NavigateToPage()
    homePageActions.ClickManagedContentsLink()
    managedContentsPageActions.VerifyPage()
    managedContentsPageActions.EnterTextIntoFolderTxtBx('-TEST_Folder_Delete')
    managedContentsPageActions.ClickSearchBtn()

  })
       
 //------------- Continued...

  it('1.47 Test Environment : https://library-test.planninginspectorate.gov.uk/',function(){
    homePageActions.VerifyPage()
  })

  it('1.48 Production Environment : https://library.planninginspectorate.gov.uk/',function(){
    cy.visit('https://library.planninginspectorate.gov.uk/')
    //homePageActions.VerifyPage()
  })  

})

describe("Login as an admin tests",() => {

    it('1.22 As an admin, I can reset my password',function(){
    loginPageActions.NavigateToPage()
    loginPageActions.VerifyPage()
    loginPageActions.EnterAdminEmailName()
    loginPageActions.EnterPassword()
    loginPageActions.ClickToResetPasswordTab()
    loginPageActions.VerifyResetPage()
    loginPageActions.EnterAdminEmailName() 
    // Avoiding sending repeated emails for resetting the password within the test
  })

})

describe("Search Functionality tests",() => {  

beforeEach(() => {
    cy.Login()
    homePageActions.NavigateToPage()
})

// 1.09: Search results
  it('1.09 As a user, I can use filters to narrow down search results using Publication Date',function(){
    homePageActions.SearchLibrary('Acts')
    searchPageActions.VerifyPage()
    searchPageActions.MatchesFound('1409')
    searchPageActions.SelectPublicationDateFacetCheckBox()
    searchPageActions.MatchesFound('106')
  })

  it('1.09 As a user, I can use filters to narrow down search results using Authors',function(){
    homePageActions.SearchLibrary('Acts')
    searchPageActions.VerifyPage()
    searchPageActions.SelectAuthorsFacetCheckBox()
    searchPageActions.MatchesFound('364')
  })
  // 1.09 Finish

  it('1.13 TBD As a user, I can conduct a search with advanced filters by clicking on the Advanced Search homepage tile',function(){
    homePageActions.ClickSearchBtn()
    //searchPageActions.ClickAdvancedSearchFilters() TODO: Getting bad gateway when clicking this CSS
    //searchPageActions.VerifyPageViaHmPge()
  })

  it('1.20 TBD As a user, I can view metadata for a document on its document page',function(){
    // Compound document
    homePageActions.ClickTopicsBtn()
    accessPageActions.ClickAccessLink()
    accessPageActions.ClickAccessAndNatureConservationDoc()
    //metadataPageActions.VerifyDocPage() TODO: Verify metadata within the original tab
  })

  it('1.20.1 As a user, I can view metadata for a compound document on its document page',function(){
    homePageActions.ClickTopicsBtn()
    accessPageActions.ClickAccessLink()
    accessPageActions.ClickPositiveManagementIconCompoundDocIcon()
    metadataPageActions.VerifyCompoundDocPage()
  })
       
})  

describe("Admin Functionality tests",() => {

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

  it('1.21 As an admin, I can log in to the Library',function(){
    homePageActions.NavigateToPage()
    homePageActions.VerifyPage()
  })

  it('TBD 1.22 As an admin, I can reset my password',function(){

  })


  it('1.23 As an admin, I can log in to the Library_DUP_TESTED_BY_1.21',function(){
    // Duplicate of 1.21 test case
    homePageActions.VerifyPage()
  })


  it('1.24 As an admin, I can upload a document to the Library',function(){
    // TODO
  }) 
  
  it('TBD 1.25 As an admin, I can add metadata for an uploaded file (cataloguing)',function(){
    homePageActions.ClickManagedContentsLink()
    managedContentsPageActions.VerifyPage()
    managedContentsPageActions.EnterTextIntoFolderTxtBx('TEST_Folder_Delete')
    managedContentsPageActions.ClickSearchBtn() 
  })

})

describe("Test Production Environment",() => {

  it('1.48 Production Environment : https://library.planninginspectorate.gov.uk/',function(){
    cy.visit('https://library.planninginspectorate.gov.uk/')
    homePageActions.VerifyPage()
  })

})