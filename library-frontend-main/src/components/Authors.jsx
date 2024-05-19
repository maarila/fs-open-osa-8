import BirthYearForm from './BirthYearForm'

const Authors = (props) => {
  if (!props.show) {
    return null
  }

  const authors = props.authors
  const options = authors.map((author) => ({
    value: author.name,
    label: author.name,
  }))

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map((author) => (
            <tr key={author.name}>
              <td>{author.name}</td>
              <td>{author.born}</td>
              <td>{author.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <BirthYearForm options={options} />
    </div>
  )
}

export default Authors
