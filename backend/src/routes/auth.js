const userSchema = require('../models/user');

const express = require('express');
const router = express.Router();

router.post('/createUser', async (req, res) => {
    try {
        const userData = req.body;
        const userBool = await userSchema.exists({ username: userData.username });
        console.log(userBool);
        if (!userBool) {
            console.log('console 1');
            const newUser = new userSchema(userData);
            console.log('console 2');
            const user = await newUser.save();
            console.log('console 3');
            res.status(200).send({ message: 'usuario criado com sucesso', type: 'success', data: user });
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
        const userDataBd = await userSchema.findOne({ username: userData.username, password: userData.password });
        userBool ? res.status(200).json({ message: 'Usuário logado com sucesso', isLogged: true, data: userDataBd }) : res.status(200).json({ message: 'Dados inválidos', isLogged: false });
    } catch (error) {
        res.status(500).json({ message: error });
    }
})

module.exports = router;