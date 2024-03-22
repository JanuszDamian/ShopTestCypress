class HomePage {
    get inputSearch() {
        return cy.get("#search-field-top-bar");
    }

    get buttonLupka() {
        return cy.get('#search-top-bar-submit');
    }

    enterPhrase(text, delayValue) {
        this.inputSearch.type(text, {delay: delayValue});
    }

    searchPhrase() {
        this.buttonLupka.click();
    }


}

export default new HomePage();