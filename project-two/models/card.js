const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image_uri: {
        type: String,
        required: true,
    },
    type_line: {

    },
})

module.exports = mongoose.model('Card', cardSchema);