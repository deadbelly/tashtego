describe('Error', () => {

  it('Should inform the user of 404 errors', () => {
    cy.intercept('GET', `https://openlibrary.org/search.json?q=moby+dick`,
      {statusCode: 404});
    cy.visit('http://localhost:3000');
    cy.get('.searchbtn').click();
    cy.get('input[name="search"]').type('moby dick {enter}');
    cy.get('h1').should('contain', 404);
  });

  it('Should inform the user of 500 errors', () => {
    cy.intercept('GET', `https://openlibrary.org/search.json?q=moby+dick`,
      {statusCode: 500});
    cy.visit('http://localhost:3000');
    cy.get('.searchbtn').click();
    cy.get('input[name="search"]').type('moby dick {enter}');
    cy.get('h1').should('contain', 500);

  });

  it('Should inform the user of 401 errors', () => {
    cy.intercept('GET', `https://openlibrary.org/search.json?q=moby+dick`,
      {statusCode: 401});
    cy.visit('http://localhost:3000');
    cy.get('.searchbtn').click();
    cy.get('input[name="search"]').type('moby dick {enter}');
    cy.get('h1').should('contain', 401);
  });

  it('Should inform the user of 502 errors', () => {
    cy.intercept('GET', `https://openlibrary.org/search.json?q=moby+dick`,
      {statusCode: 502});
    cy.visit('http://localhost:3000');
    cy.get('.searchbtn').click();
    cy.get('input[name="search"]').type('moby dick {enter}');
    cy.get('h1').should('contain', 502);
  });

  it('Should inform the user of 301 errors', () => {
    cy.intercept('GET', `https://openlibrary.org/search.json?q=moby+dick`,
      {statusCode: 301});
    cy.visit('http://localhost:3000');
    cy.get('.searchbtn').click();
    cy.get('input[name="search"]').type('moby dick {enter}');
    cy.get('h1').should('contain', 301);
  });


  it('Should inform the user of 302 errors', () => {
    cy.intercept('GET', `https://openlibrary.org/search.json?q=moby+dick`,
      {statusCode: 302});
    cy.visit('http://localhost:3000');
    cy.get('.searchbtn').click();
    cy.get('input[name="search"]').type('moby dick {enter}');
    cy.get('h1').should('contain', 302);
  });

  it('Should inform the user of 410 errors', () => {
    cy.intercept('GET', `https://openlibrary.org/search.json?q=moby+dick`,
      {statusCode: 410});
    cy.visit('http://localhost:3000');
    cy.get('.searchbtn').click();
    cy.get('input[name="search"]').type('moby dick {enter}');
    cy.get('h1').should('contain', 410);
  });

  it('Should inform the user of 503 errors', () => {
    cy.intercept('GET', `https://openlibrary.org/search.json?q=moby+dick`,
      {statusCode: 503});
    cy.visit('http://localhost:3000');
    cy.get('.searchbtn').click();
    cy.get('input[name="search"]').type('moby dick {enter}');
    cy.get('h1').should('contain', 503);
  });
});
