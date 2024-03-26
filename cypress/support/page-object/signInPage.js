class SignInPage {
    get inputEmailAdress() {
        return cy.get("#email");
    }

    get inputPassword() {
        return cy.get("#passwd");
    }

    get buttonSignIn() {
        return cy.get("#SubmitLogin");
    }

    get ErrorText() {
        return cy.get(".alert-danger > p")
    }

    signInFail(email, [password]) {
        this.inputEmailAdress.type(email);
        this.inputPassword.type(password, {force: true});
        this.buttonSignIn.click();
    }

    loginErrorAssert() {
        this.ErrorText.should("contain", "error");
    }

}

export default new SignInPage();
