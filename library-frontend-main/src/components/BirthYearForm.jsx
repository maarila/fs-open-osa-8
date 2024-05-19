import { useState } from 'react'
import { useMutation } from '@apollo/client'

import { EDIT_BIRTH_YEAR, ALL_AUTHORS } from '../queries'

const BirthYearForm = () => {
  const [name, setName] = useState('')
  const [setBornTo, setSetBornTo] = useState('')

  const [changeBirthYear] = useMutation(EDIT_BIRTH_YEAR, {
    refetchQueries: [{ query: ALL_AUTHORS }],
  })

  const submit = async (event) => {
    event.preventDefault()

    changeBirthYear({ variables: { name, setBornTo } })

    setName('')
    setSetBornTo('')
  }

  return (
    <div>
      <h2>Set birth year</h2>

      <form onSubmit={submit}>
        <div>
          name{' '}
          <input
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </div>
        <div>
          born{' '}
          <input
            value={setBornTo}
            onChange={({ target }) => setSetBornTo(Number(target.value))}
          />
        </div>
        <button type="submit">update author</button>
      </form>
    </div>
  )
}

export default BirthYearForm
