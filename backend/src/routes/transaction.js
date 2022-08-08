const transactionSchema = require('../models/transaction');
const userSchema = require('../models/user');

const express = require('express');
const router = express.Router();

router.post('/createTransaction', async (req, res) => {
    try {
        const dataTransaction = req.body;
        const newTransaction = new transactionSchema(dataTransaction);
        const transaction = await newTransaction.save();
        console.log(transaction);
        res.status(200).json({ message: "Transação efetuada com sucesso", type: "success", data: transaction })
    } catch (error) {
        res.status(500).json({ message: error, type: 'error' });
    }
});

module.exports = router;