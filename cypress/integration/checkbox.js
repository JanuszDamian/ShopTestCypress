/// <reference types="cypress" />

import HomePage from "../support/page-object/homePage"

describe("E2E - checkbox", () => {
    it("CheckboxTest - automationpractice", () => {
        cy.visit("/")
        HomePage.checkboxSizeTshirt();
        HomePage.checkboxAssert();
    })

})