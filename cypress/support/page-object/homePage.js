class HomePage {
    get inputSearch() {
        return cy.get("#search_query_top");
    }

    get buttonLupka() {
        return cy.get("name=['submit_search']");
    }

    searchPhrase(text, delayValue) {
        this.inputSearch.type(text, {delay: delayValue})
    }
}

export default new HomePage();