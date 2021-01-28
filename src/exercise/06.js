
// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import {React, useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  const [userName, setUsername] = useState('')
  // const [error, setError] = useState(null)

  function handleSubmit(event) {
    event.preventDefault()
    const value = event.target.elements.usernameInput.value
    onSubmitUsername(value)
  }

  function handleChange(event) {
     const value = event.target.value
    //  const isValid = value === value.toLowerCase()
    setUsername(value.toLowerCase())

    //  setError(isValid ? null : "Username must be lowercase")
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input onChange={handleChange} id="usernameInput" type="text" value={userName}/>
      </div>
      {/* <p>{error}</p> */}
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
