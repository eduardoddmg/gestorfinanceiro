const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
    typeTransaction: {
        type: String,
        required: true
    }, 
    valueTransaction: {
        type: Number,
        required: true
    }, 
    nameItemTransaction: {
        type: String,
        required: true,
    },
    descriptionItemTransaction: {
        type: String,
        required: true,
    },
    idUser: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('transaction', transactionSchema);