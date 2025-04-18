/// <reference types="cypress" />

import LoginPage from '../support/PageObjectModel/Spotify/LoginPage';

const loginpage = new LoginPage();

describe('Spotify Testing', { testIsolation: false }, () => {

  function logIntoGoogle(username, password) {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.window().then(win => win.sessionStorage.clear());

    cy.viewport('iphone-x');
    cy.visit('https://open.spotify.com/', {
      headers: {
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) CriOS/117.0.5938.117 Mobile/15E148 Safari/604.1'
      }
    });

    loginpage.previewmenuContainer().click();
    loginpage.loginUI().click();
    loginpage.google().click();

    cy.origin('https://accounts.google.com', { args: { username, password } }, ({ username, password }) => {
      Cypress.on('uncaught:exception', (err) => {
        return !err.message.includes('ResizeObserver loop') && !err.message.includes('Error in protected function');
      });

      cy.get('input[type="email"]').type(username, { log: false });
      cy.contains('Next').click();
      cy.get('input[type="password"]', { timeout: 10000 }).type(password, { log: false });
      cy.contains('Next').click();
    });
  }

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.window().then(win => win.sessionStorage.clear());
    cy.viewport('iphone-x');
    cy.visit('https://open.spotify.com/', {
      headers: {
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) CriOS/117.0.5938.117 Mobile/15E148 Safari/604.1'
      }
    });
  });

  it('Validate the options in the Menu - UI', () => {
    loginpage.previewmenuContainer().click();
    loginpage.loginUI().should('contain', 'Log in');
    loginpage.signupUI().should('contain', 'Sign up');
    loginpage.premiumUI().should('contain', 'Premium');
    loginpage.helpUI().should('contain', 'Help');
    loginpage.downloadUI().should('contain', 'Download');
    loginpage.privacyUI().should('contain', 'Privacy');
    loginpage.termsUI().should('contain', 'Terms');

    loginpage.loginUI().click();
  });

  it('Validate Login Page - UI', () => {
    loginpage.previewmenuContainer().click();
    loginpage.previewmenuContainerLogin().click();

    loginpage.spotLogin().should('contain', 'Log in to Spotify');
    loginpage.google().should('contain.text', 'Continue with Google');
    loginpage.facebook().should('contain.text', 'Continue with Facebook');
    loginpage.apple().should('contain.text', 'Continue with Apple');
    loginpage.phoneNumber().should('contain.text', 'Continue with phone number');
    loginpage.username().invoke('attr', 'placeholder').should('contain', 'Email or username');
    loginpage.dontHaveAccount().should('contain', "Don't have an account?");
    loginpage.spotSignup().should('contain', 'Sign up for Spotify');
  });

  it('Login with valid username and password - Functional', () => {
    loginpage.previewmenuContainer().click();
    loginpage.loginUI().click();

    cy.origin('https://accounts.spotify.com', () => {
      cy.get('[data-testid="login-username"]').type(Cypress.env('spotify_email'));
      cy.get('[data-testid="login-password"]').type(Cypress.env('spotify_password'));
      cy.get('[data-testid="login-button"]').click();

      cy.get('body').then($body => {
        if ($body.find('[data-testid="user-widget-link"]').length > 0) {
          loginpage.widgetLink().click({ force: true });
          cy.contains('Log out').click({ force: true });
        }
      });
    });
  });

  // it('Login with Google - Functional', () => {
  //   logIntoGoogle(Cypress.env('google_email'), Cypress.env('google_password'));
  // });

  it('Login with google',()=>{
    logIntoGoogle(Cypress.env('google_email'), Cypress.env('google_password'));
    cy.visit('https://open.spotify.com/', {
        headers: {
            'user-agent':
              'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/537.36 (KHTML, like Gecko) CriOS/117.0.5938.117 Mobile/15E148 Safari/604.1'
          }
    });
    
  
})
})

