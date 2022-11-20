import Kategori from '../models/Kategori.js'


// get
export const getKategori = async (req, res) => {
    try{
        const kategoris = await Kategori.find()
        res.json(kategoris)
    }catch (error) {
        res.json({messagee: error.messagee})
    }
    
}

// get pake id
export const getByIDKategori = async (req, res) => {
    try{
        const kategoriid = await Kategori.findById(req.params.id)
        res.json(kategoriid)
    }catch (error) {
        res.json({messagee: error.messagee})
    }
    
}

// tambah kategori
export const addKategori = async (req, res) => {
    const kategori = new Kategori(req.body);
    try{
        const add_Product = await kategori.save();
        res.json(add_Product)
    }catch (error) {
        res.json({messagee: error.messagee})
    }
    
}

// update kategori
export const updateKategori = async (req, res) => {
    try{
        const update_Product = await Kategori.updateOne({_id: req.params.nama_kategori}, {$set: req.body});
        res.json(update_Product)
    }catch (error) {
        res.json({messagee: error.messagee})
    }
    
}

//Delet Kategori 
export const deletKategori = async (req, res) => {
    try{
        const delet_kategori = await Kategori.deleteOne({_id: req.params.id})
        res.json(delet_kategori)
    }catch (error) {
        res.json({messagee: error.messagee})
    }
    
}





