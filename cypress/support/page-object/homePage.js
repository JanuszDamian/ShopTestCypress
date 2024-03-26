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

    get tShirtLink() {
        return cy.get('a[title="T-shirts"]').eq(1)
    }

    get checkSizeM() {
        return cy.get("#layered_id_attribute_group_2")
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

    checkboxSizeTshirt() {
        this.tShirtLink.click();
        this.checkSizeM.click();
    }

    checkboxAssert() {
        this.checkSizeM.invoke("prop", "checked").then(checkedValue => {
            cy.log(checkedValue)
        })

    }

}

export default new HomePage();