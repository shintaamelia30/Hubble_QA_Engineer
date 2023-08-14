require('cypress-xpath')

describe('Login', () => {
  it('pos-login-berhasil', () => {
    // URL
    cy.visit('https://www.tokopedia.com/')
    // Cek URL Benar
    
    //search product
    cy.xpath("//input[@placeholder='Cari di Tokopedia']").should('be.visible').type('Iphone 14pro');
    cy.xpath("//div[normalize-space()='iphone 14pro']").click()

    cy.xpath("//input[@placeholder='Harga Minimum']")
    .should('be.visible')
    .type('100000')
    .should('have.value', '100000') // Confirm that the value was typed correctly
    .click();

    cy.get("input[placeholder='Harga Maksimum']")
    .should('be.visible')
    .invoke('val', '300000')
    .should('have.value', '300000')
    .click();

    cy.xpath("//span[normalize-space()='Official Store']") // Use 'cy.get()' with CSS selector
    cy.xpath("//div[normalize-space()='Official Store']").click()



// Using cy.xpath() to select and interact with the element
cy.xpath("//p[@class='css-3tkidh-unf-heading e1qvo2ff8'][normalize-space()='Harga Terendah']")
cy.xpath("//div[normalize-space()='Harga Terendah']").click()



    // cy.xpath("//p[@class='css-3tkidh-unf-heading e1qvo2ff8'][normalize-space()='Harga Terendah']") // Use 'cy.get()' with CSS selector
    // cy.xpath("//div[normalize-space()='Harga Terendah']").click()
    
  
  })
})



