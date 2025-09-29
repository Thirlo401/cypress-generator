// Page Object for 
            Solidariteit netwerk
    
// Encapsulates selectors and actions for maintainability

class 
Solidariteitnetwerk
Page {
  visit() {
    cy.visit('https://staging.solidarity-snp.datakrag.co.za/registreer');
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

module.exports = 
Solidariteitnetwerk
Page;
