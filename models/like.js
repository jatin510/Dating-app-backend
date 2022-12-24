const mongoose = require('mongoose');


const likeSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    liked: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]
})

module.exports = mongoose.model('Like', likeSchema)