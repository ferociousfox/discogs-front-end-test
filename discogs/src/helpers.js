
const sortDataByYear = arr => arr.sort((a, b) => a.year - b.year)
const sortDataByArtist = arr => arr.sort((a, b) => {
  if (a.artist.toLowerCase() < b.artist.toLowerCase()) return - 1
  if (a.artist.toLowerCase() > b.artist.toLowerCase()) return 1
  else return 0
})

module.exports = { sortDataByArtist, sortDataByYear}