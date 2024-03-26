/// <reference types="cypress" />

import HomePage from "../support/page-object/homePage"

describe("E2E - Automation practice test", () => {
    it("SearchTest - automationpractice", () => {
        cy.visit("/")
        HomePage.enterPhrase("Test", 100);
        HomePage.searchPhrase();
        HomePage.noResultAssert();
    })

})