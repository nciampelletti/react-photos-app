import React, { useState, useEffect } from "react"
import { FaSearch } from "react-icons/fa"
import Photo from "./Photo"

const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`

function App() {
  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState([])
  const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`

  useEffect(() => {
    fetchImages()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const fetchImages = async () => {
    setLoading(true)

    let url = `${mainUrl}${clientID}`

    try {
      const response = await fetch(url)
      const data = await response.json()

      setPhotos(data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  return (
    <main>
      <section className='search'>
        <form className='search-form'>
          <input type='text' placeholder='search' className='form-input' />
          <button type='submit' className='submit-btn' onClick={handleSubmit}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className='photos'>
        <div className='photos-center'></div>
      </section>
    </main>
  )
}

export default App
