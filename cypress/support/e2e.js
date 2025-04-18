// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
require('cypress-xpath');  //xpath
import 'cypress-mochawesome-reporter/register';  //report
//import 'cypress-axe';  //Accessibility Testing
import 'cypress-real-events/support';  //mouse 
//import "cypress-social-logins";  //Social Login Plugin
import 'cypress-iframe';  //iframe


Cypress.on('uncaught:exception', (err, runnable) => {
  // prevent Cypress from failing the test on app exceptions
  return false;
});

Cypress.on(
  'uncaught:exception',
  (err) =>
    !err.message.includes('ResizeObserver loop') &&
    !err.message.includes('Error in protected function')
)




  
/*Cypress.on('uncaught:exception', (err, runnable) => {
    // Return false to prevent the test from failing
    return false;
  }); */


  const app =window.top;
  if(!app.document.head.querySelector("[data-hide-command-log-request")) {
    const style = app.document.createElement("style");
    style.innerHTML = ".command-name-request, .command-name-xhr {display:none} ";
    style.setAttribute('data-hide-command-log-request', '');
    app.document.head.appendChild(style);
  }
  
  Cypress.on('uncaught:exception', (err, runnable) => {
    // Return false to prevent Cypress from failing the test
    if (err.message.includes('No embedded data provided for react element keyboard-shortcuts-dialog')) {
      return false;
    }
    return true; // Let other exceptions fail the test
  });


  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test due to uncaught errors
    return false;
  });
 
  
  
