import { useState, useEffect } from 'react'
import Loader from 'react-loader-spinner'

import './App.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import { releaseData } from './data'
import Card from './Card'
import { sortDataByYear, sortDataByArtist } from './helpers'
// typo prevention
const year = 'year'
const artist = 'artist'

function App() {
  const [data, setData] = useState([])
  const [sortOrder, setSortOrder] = useState(artist)

  useEffect(() => {
    async function getData() {
      const res = await releaseData()
      setData(sortDataByArtist(res.releases))
    }
    getData()
  }, [])

  useEffect(() => {
    setData(data => {
      const dataByArtist = sortOrder === year
        ? sortDataByYear(data)
        : sortDataByArtist(data)
      setData(dataByArtist)
    })
  }, [sortOrder])

  if(!data) return (
    <Loader
      type="Puff"
      color="#00BFFF"
      height={1000}
      width={1000}
    />
  )

  return (
    <>
      <div className="heading">
        <div>
          <h1>Realeases from R&amp;S Records</h1>
        </div>
        <div>
          <select
            className="select"
            name="year-artist-sort"
            onChange={e => setSortOrder(e.target.value)}
          >
            <option value={artist}>Sort by Artist</option>
            <option value={year}>Sort by Year</option>
          </select>
        </div>
      </div>
      <div className="flex-grid">
        {data.map(({ artist, catno, resource_url, thumb, title, year }) =>
          <Card
            key={resource_url}
            url={resource_url}
            artist={artist}
            catno={catno}
            thumb={thumb}
            title={title}
            year={year}
          />
        )}
      </div>
    </>
  )
}

export default App
