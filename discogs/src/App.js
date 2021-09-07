import { useState, useEffect } from 'react'
import Loader from 'react-loader-spinner'

import './App.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import { releaseData } from './data'
import Card from './Card'
import { sortDataByYear, sortDataByArtist } from './helpers'


function App() {
  // typo prevention
  const _year = 'year'
  const _artist = 'artist'
  const [data, setData] = useState([])
  const [sortOrder, setSortOrder] = useState(_artist)

  useEffect(() => {
    async function getData() {
      const res = await releaseData()
      setData(sortDataByArtist(res.releases))
    }
    getData()
  }, [])

  useEffect(() => {
    setData(data => {
      const dataByArtist = sortOrder === _year
        ? sortDataByYear(data)
        : sortDataByArtist(data)
      setData(dataByArtist)
    })
  }, [sortOrder])

  if(!data.length) return (
    <Loader
      type="Puff"
      color="#00BFFF"
      height={1000}
      width={1000}
    />
  )
  // take out after Card is complete
  console.log(data)
  const { artist, catno, thumb, title, resource_url, year } = data[0]
  return (
    <div className="flex-grid">
      <Card
        key={resource_url}
        artist={artist}
        catno={catno}
        thumb={thumb}
        title={title}
        url={resource_url}
        year={year}
      />
    </div>
  )
}

export default App
