const { Router } = require('express');
const FighterService = require('../services/fighterService');
const { responseMiddleware } = require('../middlewares/response.middleware');
const { createFighterValid, updateFighterValid } = require('../middlewares/fighter.validation.middleware');

const router = Router();
let resource = "fighter";

router.get('/', (req, res, next) => {
    try {
        res.data = FighterService.getAll()
    } catch (err) {
        res.err = err
    } finally {
        next();
    }
}, responseMiddleware)

router.post('/', createFighterValid, (req, res, next) => {
    try {
        if (res.fighter) {
            res.data = FighterService.create(res.fighter)
        }
    } catch (err) {
        res.err = err
    } finally {
        next();
    }
}, responseMiddleware)

router.get('/:id', (req, res) => {
    try {
        res.data = FighterService.get(req.params.id);
    } catch (err) {
        res.err = err
    } finally {
        next()
    }
})

router.put('/:id', (req, res) => {
    res.send(`update ${resource}`)
})

router.delete('/:id', (req, res) => {
    res.send(`delete ${resource}`)
})
// TODO: Implement route controllers for fighter

module.exports = router;