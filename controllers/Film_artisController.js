import Film from "../models/Film_artis.js"


// get
export const getFilmArtis = async (req, res) => {
    try{
        const kategoris = await Film.find()
        res.json(kategoris)
    }catch (error) {
        res.json({messagee: error.messagee})
    }
    
}

// get pake id
export const getByIDfilmArtis = async (req, res) => {
    try{
        const filmArtisid = await Film.findById(req.params.id_film_artis)
        res.json(filmArtisid)
    }catch (error) {
        res.json({messagee: error.messagee})
    }
    
}

// tambah Film
export const addFilmArtis = async (req, res) => {
    const filmArtis = new Film(req.body);
    try{
        const add_FilmArtis = await filmArtis.save();
        res.json(add_FilmArtis)
    }catch (error) {
        res.json({messagee: error.messagee})
    }
    
}

// update kategori
// export const updateKategori = async (req, res) => {
//     try{
//         const update_Product = await Kategori.updateOne({_id: req.params.nama_kategori}, {$set: req.body});
//         res.json(update_Product)
//     }catch (error) {
//         res.json({messagee: error.messagee})
//     }
    
// }

// Delet Kategori 
export const deletFilmArtis = async (req, res) => {
    try{
        const delet_filmArtis = await Film.deleteOne({_id: req.params.id_film_artis})
        res.json(delet_filmArtis)
    }catch (error) {
        res.json({messagee: error.messagee})
    }
    
}





