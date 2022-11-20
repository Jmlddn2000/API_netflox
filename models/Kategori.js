import mongoose from "mongoose";

const Kategori = mongoose.Schema({
    id : {
        type : Number,
    },
    nama_kategori : {
        type : String,
    }
    
})

export default mongoose.model('kategoris', Kategori)