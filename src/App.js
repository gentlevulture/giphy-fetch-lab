import React, { useEffect, useState } from 'react';
import './App.css';
import Form from "./Form"
import GifFetch from "./GifFetch"

function App() {
  const [gifData, setGifData] = useState("")
  const [gifSearch, setGifSearch] = useState("")

  const handleSubmit = search => {
    setGifSearch(search)
  }

  useEffect(() => {
    
    let gifUrl = `https://api.giphy.com/v1/gifs/random?api_key=hIcLlbjnNACF1wpD4lZxtuwKdiJ651HI&tag=${gifSearch}&rating=g`

    const makeApiCall = () => {
      fetch(gifUrl)
      .then(res => res.json())
      .then(data => {
        console.log("setGifData", data)
        setGifData((data))
      })
    }
    makeApiCall()
  }, [gifSearch])

  return (
    <div className="App">
      <h1>Giphy</h1>
      <Form
        handleSubmit={handleSubmit}
      />
      <div>
      {gifData.data ? <GifFetch gif={gifData} /> : <h3>Pull random gifs from Giphy</h3>}
      </div>
    </div>
  );
}

export default App;