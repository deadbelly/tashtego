describe('ReadingList Default', () => {
  it('Should begin with no books', () => {
    cy.visit('http://localhost:3000');
    cy.get('.listbtn').click();
    cy.get('.list-item').should('not.exist');
  });
});

describe('ReadingList Integration', () => {
  beforeEach(() => {
    cy.intercept('GET', `https://openlibrary.org/search.json?q=moby+dick`,
      {fixture: 'searchResponse'});
    cy.visit('http://localhost:3000');
    cy.get('.searchbtn').click();
    cy.get('input[name="search"]').type('moby dick {enter}');
    cy.get('.book').first().click();
    cy.get('.book').last().click();
    cy.get('.listbtn').click();
  });

  it('Should let the user add books', () => {
    cy.get('.list-item').should('have.length', 1);
    cy.get('.searchbtn').click();
    cy.get('.book').eq(2).click();
    cy.get('.listbtn').click();
    cy.get('.list-item').should('have.length', 2);
  });

  it('Should let the user remove books', () => {
    cy.get('.list-item').should('have.length', 1);
    cy.get('.controlbtn').click();
    cy.get('.list-item').should('have.length', 0);
  });

  it('Should let the user re-organize the order', () => {
    cy.get('.list-item')
  });
});
