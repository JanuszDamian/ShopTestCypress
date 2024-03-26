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

    signInFail(email, [password]) {
        this.inputEmailAdress.type(email);
        this.inputPassword.type(password);
        this.buttonSignIn.click();
    }

}

export default new SignInPage();
