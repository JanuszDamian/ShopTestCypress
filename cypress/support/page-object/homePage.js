class HomePage {
    get inputSearch() {
        return cy.get("#search_query_top");
    }

    get buttonLupka() {
        return cy.get('[name="submit_search"]');
    }

    get noResultText() {
        return cy.get('p[class="alert alert-warning"]');
    }

    enterPhrase(text, delayValue) {
        this.inputSearch.type(text, {delay: delayValue});
    }

    searchPhrase() {
        this.buttonLupka.click();
    }

    noResultAssert() {
        this.noResultText.should("contain","o results were found for your search");
    }

}

export default new HomePage();