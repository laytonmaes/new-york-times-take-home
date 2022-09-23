describe('empty spec', () => {
beforeEach(() => {
  cy.fixture("mockArticles.json").then((articles) => {
    cy.intercept(
      "GET",
      "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=XNnToqSA6rVzpg5KjSaAOgzhVmYo1HUf",
      articles
    )
  })
  cy.visit('http://localhost:3000/')
})

  it('should have a title', () => {
    cy.get("h1").contains("NY Times: Top Stories")
  })

  it("should have two cards", () => {
    cy.get("div .Newscard-container").should("have.length", 2)
  })

  it("should have basic article info in each card", () => {
    cy.get(".Newscard-container h2").eq(0).contains("Central Banks Accept Pain Now, Fearing Worse Later")
    cy.get("img").eq(1)
    .should("have.attr", "src")
    .should(
      "include",
      "https://static01.nyt.com/images/2022/09/22/business/00dc-fedassess01/merlin_201009120_cc0e8e18-ce03-4c13-a1a3-34317449ae4f-superJumbo.jpg"
    )
      cy.get("p").eq(0).contains("business")
      cy.get("p").eq(1).contains("2022-09-22T17:19:02-04:00")
      cy.get("p").eq(2).contains("Federal Reserve officials and their counterparts around the world are trying to defeat inflation by rapidly raising interest rates. They know it will come at a cost.")
  })

  it("should have different info in each card", () => {
    cy.get(".Newscard-container").eq(1).within(() => {
      cy.get("h2").eq(0).contains("Central Banks Doing Stuff")
      cy.get("p").eq(0).contains("stuffs")
      cy.get("p").eq(1).contains("2022-09-22T17:19:02-04:00")
    })
  })

  it("should be able to click cards to see details", () => {
    cy.get(".Newscard-container").eq(1).click()
    cy.get("h2").contains("Central Banks Doing Stuff")
    cy.get("h4").eq(0).contains("Link to Article:")
    cy.get("h4").eq(1).contains("Tags:")
    cy.get(".Article-Tags p").should("have.length", 2)
  })
})