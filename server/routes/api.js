const express = require('express')
const urllib = require('urllib')
const router = express.Router()


const API_URL = 'http://www.omdbapi.com/?apikey=a2e2ca53&t='


const extractMovie = movie => ({id: movie.imdbID, title: movie.Title, poster: movie.Poster, year: movie.Year})

router.get('/sanity', (req, res) => res.send('OK'))

router.get('/movies/:title', (req, res) => {
    // urllib.request(API_URL + req.params.title, {dataType:'json'}, (err, data) => {
    //     res.send(data.map(movie => extractMovie(movie)))
    // })
    res.send(dummydata)
})

module.exports = router




const dummydata = [{
    id: 'tt0137523',
    title: 'Fight Club',
    poster: 'https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
    year: 1999
},
{
    id: 'tt0069113',
    title: 'The Poseidon Adventure',
    poster: 'https://image.tmdb.org/t/p/original/6RGiA5BfhelU9zoD0b1GAG4GWWf.jpg',
    year: 1972
},
{
    id: 'tt0043686',
    title: 'Jeux interdits',
    poster: 'https://image.tmdb.org/t/p/original/nby91GNVXQAv1NmKvqlpEEdhcMQ.jpg',
    year: 1952
},
{
    id: 'tt0105236',
    title: 'Live Entertainment',
    poster: 'https://image.tmdb.org/t/p/original/lsBnfheKZBO3UKU7lVHIeGZLWuF.jpg',
    year: 1992
},
{
    id: 'tt0427312',
    title: 'Grizzly Man',
    poster: 'https://image.tmdb.org/t/p/original/nXIV2qGK9KkdkaOTzrpK87CuAGC.jpg',
    year: 1999
},
{
    id: 'tt0058329',
    title: 'Marnie',
    poster: 'https://image.tmdb.org/t/p/original/x4SXKkgM3V1b7tnnV1Matmw8VhW.jpg',
    year: 1964
}]