import mongoose, { mongo } from "mongoose";

const Film = mongoose.Schema({
    id_film : {
        type : Number,
    },
    id_kategori : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "kategoris",
        require: true
    },
    title : {
        type : String,
    },
    durasi : {
        type : String,
    },
    umur : {
        type : Number,
    },
    rating : {
        type : String,
    },
    gendre : {
        type : String,
    },
    tahun_terbit : {
        type : Number,
    },
    overview : {
        type : String,
    },
    descripsi : {
        type : String,
    },
    garis_cerita : {
        type : String,
    },
    gambar : {
        type : String,
    }
    
})

export default mongoose.model('films', Film)