/// <reference types="cypress" />

describe('Testes para a pagina de agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
    })

    it('Adicionar novo contato', () => {
        cy.get('input[type="text"]').type('Odilon ribeiro')
        cy.get('input[type="email"]').type('Odilon1067@hotmail.com')
        cy.get('input[type="tel"]').type('(11) 99999-9999')
        cy.get('.adicionar').click()
        cy.screenshot('testando-adicionar-contato')
    })

    it('Atualizar contato existente', () => {
        cy.wait(5000)
        cy.get('.edit').first().click()

        cy.get('input[type="text"]').clear().type('Elveni ribeiro')
        cy.get('input[type="email"]').clear().type('Elveni1@gmail.com')
        cy.get('input[type="tel"]').clear().type('(11) 99999-8888')
        cy.get('.alterar').click()
        cy.screenshot('testando-atualizar-contato')
    })
        it('excluir o contato', () => {
        cy.get('.delete').first().click()

        cy.screenshot("teste-excluir");

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pelo agendamento!')
        })
    })
})