describe("Home page opening", function () {
  it("Visits", function () {
    cy.visit("http://localhost:3000");
    cy.get("article h1").should("have.text", "The market data we deserve");
  });
});
