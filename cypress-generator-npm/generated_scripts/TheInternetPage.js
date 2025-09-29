// Page Object for The Internet
// Encapsulates selectors and actions for maintainability

class TheInternetPage {
  visit() {
    cy.visit('https://the-internet.herokuapp.com/add_remove_elements/');
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

module.exports = TheInternetPage;
