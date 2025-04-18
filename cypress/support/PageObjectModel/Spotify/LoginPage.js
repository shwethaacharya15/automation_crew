class LoginPage {
    previewmenuContainer() {
      return cy.get('#preview-menu-container');
    }
  
    loginUI() {
      return cy.contains('[data-testid="preview-menu-login"]', 'Log in');
    }
  
    signupUI() {
      return cy.contains('Sign up');
    }
  
    premiumUI() {
      return cy.contains('Premium');
    }
  
    helpUI() {
      return cy.contains('Help');
    }
  
    downloadUI() {
      return cy.contains('Download');
    }
  
    privacyUI() {
      return cy.contains('Privacy');
    }
  
    termsUI() {
      return cy.contains('Terms');
    }
  
    previewmenuContainerLogin() {
      return cy.get('[data-testid="preview-menu-login"]');
    }
  
    spotLogin() {
      return cy.contains('Log in to Spotify');
    }
  
    google() {
      return cy.contains('Continue with Google');
    }
  
    facebook() {
      return cy.contains('Continue with Facebook');
    }
  
    apple() {
      return cy.contains('Continue with Apple');
    }
  
    phoneNumber() {
      return cy.contains('Continue with phone number');
    }
  
    username() {
      return cy.get('[data-testid="login-username"]');
    }
  
    password() {
      return cy.get('[data-testid="login-password"]');
    }
  
    loginButton() {
      return cy.get('[data-testid="login-button"]');
    }
  
    dontHaveAccount() {
      return cy.contains("Don't have an account?");
    }
  
    spotSignup() {
      return cy.contains('Sign up for Spotify');
    }
  
    widgetLink() {
      return cy.get('[data-testid="user-widget-link"]');
    }
  }
  
  export default LoginPage;
  