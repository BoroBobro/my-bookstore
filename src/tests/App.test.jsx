import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Welcome from '../component/Welcome'
import App from '../App'
import books from '../data/fantasy.json' // Assicurati che il percorso sia corretto

// 1. Welcome
describe('Welcome component', () => {
  it('viene montato correttamente', () => {
    render(<Welcome />)
    expect(screen.getByText(/Welcome to My Bookstore/i)).toBeInTheDocument()
    expect(screen.getByText(/Find your next fantasy adventure!/i)).toBeInTheDocument()
  })
})

// 2. Numero card = numero libri
describe('Book cards rendering', () => {
  it('rende tante card quanti sono i libri nel JSON', () => {
    render(<App />)
    const cards = screen.getAllByTestId('book-card')
    expect(cards.length).toBe(books.length)
  })
})

// 3. CommentArea
describe('CommentArea component', () => {
  it('viene renderizzato correttamente', () => {
    render(<App />)
    expect(screen.getByTestId('comment-area')).toBeInTheDocument()
  })
})

// 7. All’avvio nessun SingleComment nel DOM
describe('SingleComment on load', () => {
  it('non ci sono SingleComment all\'avvio', () => {
    render(<App />)
    expect(screen.queryByTestId('single-comment')).not.toBeInTheDocument()
  })
})

// 8. Clic su libro con recensioni: recensioni caricate
describe('Book comments loading', () => {
  it('carica le recensioni del libro selezionato', async () => {
    render(<App />)
    const cards = screen.getAllByTestId('book-card')
    
    fireEvent.click(cards.find(card => card.textContent.includes('TitoloLibroConRecensioni')))
    
    const comments = await screen.findAllByTestId('single-comment')
    expect(comments.length).toBeGreaterThan(0)
  })
})