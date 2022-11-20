import Film from "../models/Film.js"


// get
export const getFilm = async (req, res) => {
    try{
        const film = await Film.find()
        res.json(film)
    }catch (error) {
        res.json({messagee: error.messagee})
    }
    
}

// get pake id
export const getByIDfilm = async (req, res) => {
    try{
        const filmid = await Film.findById(req.params.id_film)
        res.json(filmid)
    }catch (error) {
        res.json({messagee: error.messagee})
    }
    
}

// tambah Film
export const addFilm = async (req, res) => {
    const film = new Film(req.body);
    try{
        const add_Film = await film.save();
        res.json(add_Film)
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

// Delet Film 
export const deletFilm = async (req, res) => {
    try{
        const delet_film = await Film.deleteOne({_id: req.params.id_film})
        res.json(delet_film)
    }catch (error) {
        res.json({messagee: error.messagee})
    }
    
}
