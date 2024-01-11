context('SANAE Test', () => {

  describe('E-shop tests', () => {
    it('Find three most expensive items and pu them into basket test', () => {
      cy.visit('/');
      cy.get('.menu-item-818').first().click();
      cy.get('#order2').click({force: true});
      cy.get('.add-to-cart-button').first().click();
      cy.contains('Produkt bol pridaný do nákupného košíka').should('be.visible');
      cy.get('.add-to-cart-button').eq(1).click();
      cy.contains('Produkt bol pridaný do nákupného košíka').should('be.visible');
      cy.get('.add-to-cart-button').eq(2).click();
      cy.contains('Produkt bol pridaný do nákupného košíka').should('be.visible');
      cy.get('.toggle-window.cart-count.full').click({force: true});
      cy.get('[data-micro="cartItem"]').should('have.length', 3);
      cy.get('[data-testid="buttonDeleteItem"]').first().click({force: true});
      cy.contains('Položka bola odobratá z košíka.').should('be.visible');
      cy.get('[data-micro="cartItem"]').should('have.length', 2);
    })

    it('Search test', () => {
      cy.visit('/');
      cy.get('[data-testid="linkSearchIcon"]').click();
      cy.get('[data-testid="searchInput"]').type('Samsung');
      cy.get('[data-testid="searchBtn"]').click();
      cy.contains('Produkty neboli nájdené').should('be.visible');
      cy.get('[data-testid="linkSearchIcon"]').click();
      cy.get('[data-testid="searchInput"]').clear().type('Prebaľovacie podložky 10ks');
      cy.get('[data-testid="searchBtn"]').click();
      cy.get('img[alt="BabyBaby Soft 10ks podložky old"]').should('be.visible');
    })

    it('Empty basket test', () => {
      cy.visit('/');
      cy.get('.toggle-window.cart-count').click({force: true});
      cy.contains('Váš nákupný košík je prázdny').should('be.visible');
      cy.get('#continue-order-button').should('not.exist');
    })
  })

})
