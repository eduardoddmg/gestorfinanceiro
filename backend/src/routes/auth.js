const userSchema = require('../models/user');

const express = require('express');
const router = express.Router();

router.post('/createUser', async (req, res) => {
    try {
        const userData = req.body;
        const userBool = await userSchema.exists({ username: userData.username });
        console.log(userBool);
        if (!userBool) {
            const newUser = new userSchema(userData);
            await newUser.save();
            res.status(200).send({message: 'usuario criado com sucesso', type: 'success'});
        } else {
            res.status(200).send({ message: 'usuario ja existe', type: 'error' });
        }
    } catch (error) {
        res.status(500).send({ message: error });
    }
});

router.get('/loginUser', async (req, res) => {
    try {
        const userData = req.query;
        console.log(userData);
        const userBool = await userSchema.exists({ username: userData.username, password: userData.password });
        userBool ? res.status(200).json({ message: 'Usuário logado com sucesso', isLogged: true }) : res.status(200).json({ message: 'Dados inválidos', isLogged: false });
    } catch (error) {
        res.status(500).json({ message: error });
    }
})

module.exports = router;