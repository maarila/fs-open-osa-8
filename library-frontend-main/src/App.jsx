import { useState } from 'react'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import { useQuery } from '@apollo/client'
import { ALL_BOOKS, ALL_AUTHORS } from './queries'

const App = () => {
  const [page, setPage] = useState('add')
  const authorsResult = useQuery(ALL_AUTHORS)
  const booksResult = useQuery(ALL_BOOKS)

  return (
    <div>
      <div>
        <button onClick={() => setPage('authors')}>authors</button>
        <button onClick={() => setPage('books')}>books</button>
        <button onClick={() => setPage('add')}>add book</button>
      </div>
      <Authors
        authors={authorsResult.loading ? [] : authorsResult.data.allAuthors}
        show={page === 'authors'}
      />

      <Books
        books={booksResult.loading ? [] : booksResult.data.allBooks}
        show={page === 'books'}
      />

      <NewBook show={page === 'add'} />
    </div>
  )
}

export default App
