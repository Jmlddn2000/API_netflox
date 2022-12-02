import mongoose from "mongoose";

const Artis = mongoose.Schema({
    id_artis : {
        type : Number,
    },
    nama_lengkap : {
        type : String,
    },
    gambar : {
        type : Array,
    }

})

export default mongoose.model('artis', Artis)