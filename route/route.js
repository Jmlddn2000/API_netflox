import express from 'express'
import {getKategori, 
    addKategori, 
    updateKategori,
    getByIDKategori,
    deletKategori,
} from '../controllers/kategoriController.js'

import {
    getFilmArtis,
    addFilmArtis,
    getByIDfilmArtis,
    deletFilmArtis
} from '../controllers/Film_artisController.js'

import {
    getArtis, 
    addArtis, 
    getByIDArtis, 
    deletArtis,
} from '../controllers/ArtisController.js'

import {
    getFilm, 
    addFilm, 
    getByIDfilm,
    deletFilm, 
} from '../controllers/FilmController.js'

const router = express.Router();

// Kategori
router.get('/kategori', getKategori)
router.get('/kategori/:id', getByIDKategori)
router.post('/kategori', addKategori)
router.patch('/kategori/:nama_kategori', updateKategori)
router.delete('/kategori/:id', deletKategori)

// FIlm Artis
router.get('/filmArtis', getFilmArtis)
router.post('/filmArtis', addFilmArtis)
router.get('/filmArtis/:id_film_artis', getByIDfilmArtis)
router.delete('/filmArtis/:id_film_artis', deletFilmArtis)

// Artis
router.get('/Artis', getArtis)
router.post('/Artis', addArtis)
router.get('/Artis/:id_artis', getByIDArtis)
router.delete('/Artis/:id_artis', deletArtis)

// Film
router.get('/Film', getFilm)
router.post('/Film', addFilm)
router.get('/Film/:id_film', getByIDfilm)
router.delete('/Film/:id_film', deletFilm)


export default router