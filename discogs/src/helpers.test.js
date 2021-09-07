const { sortDataByArtist, sortDataByYear } = require('./helpers')

const testData = [
  { artist: 'Built to Spill', year: 1990},
  { artist: 'Mini Trees', year: 2021 },
  { artist: 'Snail Mail', year: 2018},
  { artist: 'The Beths', year: 2018 },
  { artist: 'Ovlov', year: 2018 },
  { artist: 'Chelsea Wolfe', year: 2019 },
  { artist: 'Andy Shauf', year: 2015 },
  { artist: 'Jay Som', year: 2017 },
  { artist: 'Nick Drake', year: 1972 },
  { artist: 'Elliot Smith', year: 2000 },
  { artist: 'Thee Oh Sees', year: 2012 },
  { artist: 'Radiohead', year: 2003 },
  { artist: 'Alvvays', year: 2017},
]

test('sorts data by year', () => {
  const result = sortDataByYear(testData)
  expect(result[0]).toEqual({ artist: 'Nick Drake', year: 1972 })
})

test('sorts data by artist', () => {
  const result = sortDataByArtist(testData)
  expect(result[0]).toEqual({ artist: 'Alvvays', year: 2017 })
})