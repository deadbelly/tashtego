describe('Search', () => {
  beforeEach(() => {
    cy.intercept('GET', `https://openlibrary.org/search.json?q=moby+dick`,
      {fixture: 'searchResponse'});
    cy.visit('http://localhost:3000');
    cy.get('.searchbtn').click();
    cy.get('input[name="search"]').type('moby dick {enter}');
  });

  it('Should load all books returned by the search', () => {
    cy.get('.book').should('have.length', 47);
  });

  it('Should let the user add books to the reading list by clicking', () => {
    cy.get('.book').first().click();
    cy.get('.book').last().click();
    cy.get('.listbtn').click();
    cy.get('.list-item').should('have.length', 1);
  });

  it('Should not let a user add the same book to the reading list twice', () => {
    cy.get('.book').first().click();
    cy.get('.book').last().click();
    cy.get('.book').last().click();
    cy.get('.book').last().click();
    cy.get('.listbtn').click();
    cy.get('.list-item').should('have.length', 1);
  });

  it('Should give the user a visual indication that a book is on the reading list', () => {
    cy.get('.book').first().click();
    cy.get('.book').first().should('have.class', 'on-list');
    cy.get('.book').last().click();
    cy.get('.book').first().should('have.class', 'on-list');
    cy.get('.listbtn').click();
    cy.get('.controlbtn').click();
    cy.get('.searchbtn').click();
    cy.get('.book').not('.on-list').should('have.length', 46);
  });
});
