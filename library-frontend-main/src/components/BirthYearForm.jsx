import { useState } from 'react'
import { useMutation } from '@apollo/client'
import Select from 'react-select'

import { EDIT_BIRTH_YEAR, ALL_AUTHORS } from '../queries'

const BirthYearForm = ({ options }) => {
  // const [name, setName] = useState('')
  const [setBornTo, setSetBornTo] = useState('')
  const [selectedName, setSelectedName] = useState(null)

  const [changeBirthYear] = useMutation(EDIT_BIRTH_YEAR, {
    refetchQueries: [{ query: ALL_AUTHORS }],
  })

  const submit = async (event) => {
    event.preventDefault()
    const name = selectedName.value
    changeBirthYear({ variables: { name, setBornTo } })

    setSelectedName(null)
    setSetBornTo('')
  }

  return (
    <div>
      <h2>Set birth year</h2>

      <form onSubmit={submit}>
        <div>
          name{' '}
          <Select
            defaultValue={selectedName}
            value={selectedName || null}
            onChange={setSelectedName}
            options={options}
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
