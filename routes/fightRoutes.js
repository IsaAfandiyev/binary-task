const { Router } = require('express');
const FightService = require('../services/fightService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');


const router = Router();
let resource = "fight";

router.get('/', (req, res) => {
    res.send(`get ${resource} list`)
})

router.post('/', (req, res) => {
    res.send(`create ${resource}`)
})

router.get('/:id', (req, res) => {
    res.send(`get ${resource}`)
})

router.put('/:id', (req, res) => {
    res.send(`update ${resource}`)
})

router.delete('/:id', (req, res) => {
    res.send(`delete ${resource}`)
})
// OPTIONAL TODO: Implement route controller for fights

module.exports = router;