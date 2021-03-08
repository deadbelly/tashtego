describe('NavBar', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should have four navigation buttons', () => {
    cy.get('button').should('have.length', 4);
  });

  it('Should change routes when the user clicks a button', () => {
    cy.get('.searchbtn').click().url().should('contain', '/search');
    cy.get('.listbtn').click().url().should('contain', '/list');
    cy.get('.settingsbtn').click().url().should('contain', '/settings');
    cy.get('.homebtn').click().url().should('contain', '/');
  });

  it('Should indicate which page the user is viewing', () => {
    cy.get('.searchbtn').click().should('have.class', 'toggled');
    cy.get('.toggled').should('have.length', 1);
    cy.get('.listbtn').click().should('have.class', 'toggled');
    cy.get('.toggled').should('have.length', 1);
    cy.get('.settingsbtn').click().should('have.class', 'toggled');
    cy.get('.toggled').should('have.length', 1);
    cy.get('.homebtn').click().should('have.class', 'toggled');
    cy.get('.toggled').should('have.length', 1);
  });
});
