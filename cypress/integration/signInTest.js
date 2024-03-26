/// <reference types="cypress" />

import SignInPage from "../support/page-object/signInPage"

describe("E2E - Automation practice test", () => {

    it("SignInTest - automationpractice", () => {
        cy.visit("http://www.automationpractice.pl/index.php?controller=authentication&back=my-account")
        SignInPage.signInFail("test@test.pl", "sdfg3423")
    })

})