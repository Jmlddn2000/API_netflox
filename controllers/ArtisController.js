import Artis from "../models/Artis.js"


// get
export const getArtis = async (req, res) => {
    try{
        const artis = await Artis.find()
        res.json(artis)
        console.log(artis)
    }catch (error) {
        res.json({messagee: error.messagee})
    }
    
}

// get pake id
export const getByIDArtis = async (req, res) => {
    try{
        const artisid = await Artis.findById(req.params.id_artis)
        res.json(artisid)
    }catch (error) {
        res.json({messagee: error.messagee})
    }
    
}

// tambah Artis
export const addArtis = async (req, res) => {
    const artis = new Artis(req.body);
    try{
        const add_Artis = await artis.save();
        res.json(add_Artis)
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
export const deletArtis = async (req, res) => {
    try{
        const delet_Artis = await Artis.deleteOne({_id: req.params.id_artis})
        res.json(delet_Artis)
    }catch (error) {
        res.json({messagee: error.messagee})
    }
    
}





