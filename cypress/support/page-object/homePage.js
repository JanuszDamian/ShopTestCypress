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
        return cy.get('a[title="T-shirts"]').eq(1);
    }

    get checkSizeM() {
        return cy.get("#layered_id_attribute_group_2");
    }

    get dressesSizeAll() {
        return cy.get("#ul_layered_id_attribute_group_1")
    }

    get checkSizeS() {
        return cy.get('#layered_id_attribute_group_1')
    }

    get checkSizeL() {
        return cy.get('#layered_id_attribute_group_3')
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

    checkboxAssertM() {
        this.checkSizeM.invoke("prop", "checked").then(checkedValue => {
            cy.log(checkedValue)
        })
    }

    checkboxSizeDressesAll() {
        this.dressesSizeAll.find("input").check();
    }

    checkboxAssertAllSize() {
        this.checkSizeS.invoke("prop", "checked").then(checkedSValue => {
            cy.log(checkedSValue)
        })
        this.checkSizeM.invoke("prop", "checked").then(checkedMValue => {
            cy.log(checkedMValue)
        })
        this.checkSizeL.invoke("prop", "checked").then(checkedLValue => {
            cy.log(checkedLValue)
        })
    }



}

export default new HomePage();