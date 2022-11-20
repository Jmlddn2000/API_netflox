import mongoose from "mongoose";

const Film_artis = mongoose.Schema({
    id_film_artis : {
        type : Number,
    },
    id_film : {
        type : Number,
    },
    id_artis : {
        type : Number,
    }
    
})

export default mongoose.model('film_artis', Film_artis)