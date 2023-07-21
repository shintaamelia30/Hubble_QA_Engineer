require('cypress-xpath')

describe('Login', () => {
  it('pos-login-berhasil', () => {
    // URL
    cy.visit('https://my.alazka.or.id/login')
    // Cek URL Benar
    cy.url().should('include', '/login')
    // input username
    cy.xpath("//form[@class='form-validation']//input[@placeholder='Masukan username']").type('iglobalAdmAz')

    // Password
    cy.xpath("//input[@id='user-password']").type('#$%C1nt41Pr0dukP1ntr0')

    // Click button login
    cy.xpath("//button[@id='login']").click()

    // cek user
    cy.xpath("//span[@class='username username-hide-on-mobile']").should('include.text', 'iglobalAdmAz')
   
  })
})


