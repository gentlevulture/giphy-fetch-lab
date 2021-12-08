import React from "react";

function GifFetch({ gif }) {
  return (
    <>
    <img src={gif.data.images.original.url} alt="gif" />
    </>
  )
}

export default GifFetch