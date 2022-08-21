const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema(
    {
        typeTransaction: {
            type: String,
            required: true,
        },
        valueTransaction: {
            type: Number,
            required: true,
        },
        nameItemTransaction: {
            type: String,
            required: true,
        },
        descriptionItemTransaction: {
            type: String,
            required: true,
        },
        userId: {
            type: String,
            required: true,
        },
    },
    {
        writeConcern: {
            w: "majority",
            j: true,
            wtimeout: 1000,
        },
    }
);

module.exports = mongoose.model("transaction", transactionSchema);
