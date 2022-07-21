describe("Test Suite", () => {

    beforeEach(() => {
        //runs before ach test in the block
        cy.visit("http://zero.webappsecurity.com")
    })

    it("Validate Homepage", () => {
      cy.get(".active > img").should("be.visible")
      cy.get('.active > .custom > h4').contains("Online Banking")
    })

    it("E2E Test - Transfer of funds", () => {
        cy.get('#signin_button').click()
        cy.get('#user_login').type("username")
        cy.get('#user_password').type("password")
        cy.get('.btn').click()
        cy.get('#transfer_funds_tab > a').click()
        cy.get('#tf_fromAccountId').select("1")
        cy.get('#tf_toAccountId').select("5")
        cy.get('#tf_amount').type("300")
        cy.get('#tf_description').type("$300 for testing purpose")
        cy.get('#btn_submit').click()
        cy.get('#btn_submit').click()
        cy.get('.alert').contains("You successfully submitted your transaction.")
    })

    it("Validate chart update", () => {
        cy.get('#signin_button').click()
        cy.get('#user_login').type("username")
        cy.get('#user_password').type("password")
        cy.get('.btn').click()
        cy.get('#money_map_tab > a').click()
        cy.get('#ext-sprite-1259').should("be.visible")
        cy.get('#ext-sprite-1167 > tspan').click()
        cy.get('#ext-sprite-1259').should("not.be.visible")



    })

})