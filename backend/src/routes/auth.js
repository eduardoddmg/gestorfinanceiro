const userSchema = require('../models/user');

const express = require('express');
const router = express.Router();

router.post('/createUser', async (req, res) => {
    try {
        const userData = req.body;
        const userBool = await userSchema.exists({ username: userData.username });
        if (!userBool) {
            const newUser = new userSchema(userData);
            const user = await newUser.save();
            res.status(200).json(user);
        } else {
            res.status(200).json({ message: 'usuario ja existe' });
        }
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

router.get('/loginUser', async (req, res) => {
    try {
        const userData = req.query;
        console.log(userData);
        const userBool = await userSchema.exists({ username: userData.username, password: userData.password });
        userBool ? res.status(200).json({message: 'Usuário logado com sucesso', isLogged: true}) : res.status(200).json({message: 'Dados inválidos', isLogged: false});
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

module.exports = router;