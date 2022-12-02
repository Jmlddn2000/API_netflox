import mongoose from "mongoose";

const Film_artis = mongoose.Schema({
    id_film_artis : {
        type : Number,
    },
    id_film : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "films",
        require: true
    },
    id_artis : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "artis",
        require: true
    }
    
})

export default mongoose.model('film_artis', Film_artis)