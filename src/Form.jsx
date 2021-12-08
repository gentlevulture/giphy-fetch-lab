import React, {useState} from "react";

function Form(props) {
  const [gifSearch, setGifSearch] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    props.handleSubmit(gifSearch)
    setGifSearch('')
  };

  const handleChange = e => {
    const search =  e.target.value
    setGifSearch(search)
  };

  const refreshPage = () => {
    window.location.reload()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="gifSearch">Search:</label>
        <input
          id="gifSearch"
          type="text"
          value={gifSearch}
          placeholder="type of gif"
          onChange={handleChange}
        />
        <input type="submit" value="Submit" />
      </form>
      <button onClick={refreshPage}>Make API Call Again</button>
    </>
  )
}

export default Form