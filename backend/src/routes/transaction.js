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

router.get('/getTransaction', async (req, res) => {
    try {
        const dataQuery = req.query;
        const resp = await transactionSchema.find({ idUser: dataQuery.idUser });
        console.log(resp);
        res.status(200).json({ message: "Transação requisitada com sucesso", type: "success", data: resp })
    } catch (error) {
        res.status(500).json({ message: error, type: 'error' });
    }
});

router.put('/updateTransaction', async (req, res) => {
    try {
        const data = req.body;
        const resp = await transactionSchema.findOneAndUpdate({ _id: data._id }, data);
        res.status(200).json({ message: "Transação atualizada com sucesso", type: "success", data: resp })
    } catch (error) {
        res.status(500).json({ message: error, type: 'error' });
    }
});

router.delete('/deleteTransaction', async (req, res) => {
    try {
        const data = req.query;
        const resp = await transactionSchema.findOneAndDelete({ _id: data.idTransaction });
        res.status(200).json({ message: "Transação deletada com sucesso", type: "success", data: resp })
    } catch (error) {
        res.status(500).json({ message: error, type: 'error' });
    }
});


module.exports = router;