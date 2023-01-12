describe("AddProduct", () => {
  it('clicks the link"AddProducts"', () => {
    cy.visit("http://localhost:3000/AddProduct");
    cy.get('[name="name"]').type("Yordi").should("have.value", "Yordi");
    cy.wait(500);
    cy.get('[name="color"]').type("Red").should("have.value", "Red");
    cy.wait(500);
    cy.get('[name="stock"]').type("23").should("have.value", "23");
    cy.wait(500);
    cy.get(".AddButton").click();
  });
});
