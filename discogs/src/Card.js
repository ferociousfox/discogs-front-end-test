import React from 'react'
import './Card.css'

const Card = ({
  artist,
  catno,
  thumb,
  title,
  url,
  year,
}) => {
  const handleClick = url => {
    const id = url.slice(33)
    window.location = `https://www.discogs.com/release/${id}`
  }
  return (
    <div 
      className="card" 
      onClick={() => handleClick(url)}
      tabIndex={0}
      aria-label={`${artist} realeased ${title} in ${year}`}
    >
      <img
        alt={`cover art for ${title} by ${artist}`}
        src={thumb}
      />
      <div className="card-body">
        <div className="info">
          <h2 className="large-text">{artist}</h2>
          <h3 className="small-text">{title}</h3>
        </div>
        <div className="info">
          <h2 className="large-text">{year}</h2>
          <h3 className="small-text">{catno}</h3>
        </div>
      </div>
    </div>
  )
}

export default Card
