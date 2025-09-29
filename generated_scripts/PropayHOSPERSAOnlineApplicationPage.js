// Page Object for Propay ::     HOSPERSA Online Application
// Encapsulates selectors and actions for maintainability

class Propay::HOSPERSAOnlineApplicationPage {
  visit() {
    cy.visit('https://hospersa.propay.co.za/application');
  }

  get(selector) {
    return cy.get(selector);
  }

  type(selector, value) {
    this.get(selector).clear().type(value);
  }

  select(selector, valueOrText) {
    this.get(selector).select(valueOrText);
  }

  check(selector) {
    this.get(selector).check({ force: true });
  }

  click(selector) {
    this.get(selector).click();
  }

  login(email, password) {
    this.get('form').within(() => {
      this.type('[type="email"]', email);
      this.type('[type="password"]', password);
      this.click('[type="submit"]');
    });
  }
}

module.exports = Propay::HOSPERSAOnlineApplicationPage;
