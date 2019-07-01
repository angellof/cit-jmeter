const User = require('../models/user');
var express = require('express');
var router = express.Router();

router.get('/', async (req, res) => {
    
    try {
        return res.render('user/register');

    } catch (err) {
        res.status(400).send({ error: 'Search failed', message: err.message });
    }
});

router.get('/list', async (req, res) => {

    try {
        let users = await User.find();
        return res.render('user/list', { users });
        // return res.send( users );

    } catch (err) {
        res.status(400).send({ error: 'Search failed', message: err.message });
    }
});

router.get('/list/json', async (req, res) => {

    try {
        let users = await User.find();
        return res.send(users);

    } catch (err) {
        res.status(400).send({ error: 'Search failed', message: err.message });
    }
});

router.get('/:id', async (req, res) => {
    
    try {
        let user = await User.findById(req.params.id);
        
        if(user)
            return res.status(201).send({ message: 'Usuário encontrado com sucesso --- ' + user.name });
        else    
            return res.status(404).send({ message: 'Não foi possivel encontrar o ususario'});

    } catch (err) {
        res.status(400).send({ error: 'Search failed', message: err.message });
    }
});

router.post('/save', async (req, res, next) => {
    
    try {
        await User.create(req.body);
        
        return res.status(200).redirect('/register/list');
        
    } catch (err) {
        res.status(400).send({ error: 'Registration failed', message: err.message });
    }
});

module.exports = router;
