/// <reference types="cypress" />

import HomePage from "../support/page-object/homePage"

describe("E2E - checkbox", () => {
    it("CheckboxTest - tShirtSize", () => {
        cy.visit("/")
        HomePage.checkboxSizeTshirt();
        HomePage.checkboxAssertM();
    })

    it("CheckboxTest - dressesSize", () => {
        cy.visit("http://www.automationpractice.pl/index.php?id_category=10&controller=category")
        HomePage.checkboxSizeDressesAll();
        HomePage.checkboxAssertAllSize();
    })

})