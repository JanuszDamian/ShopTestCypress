class HomePage {
    get inputSearch() {
        return cy.get("#search_query_top");
    }

    get buttonLupka() {
        return cy.get('[name="submit_search"]');
    }

    enterPhrase(text, delayValue) {
        this.inputSearch.type(text, {delay: delayValue});
    }

    searchPhrase() {
        this.buttonLupka.click();
    }


}

export default new HomePage();