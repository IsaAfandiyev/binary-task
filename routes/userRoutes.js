const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();
let resource = "user";

router.get('/', (req, res, next) => {
    try {
        res.data = UserService.getAll()
    } catch (err) {
        res.err = err
    } finally {
        next();
    }
}, responseMiddleware)

router.post('/', createUserValid, (req, res, next) => {
    try {
        if (res.user) {
            res.data = UserService.create(res.user);
        }
    } catch (err) {
        res.err = err
    } finally {
        next()
    }
}, responseMiddleware)

router.get('/:id', (req, res, next) => {
    try {
        res.data = UserService.get(req.params.id);
    } catch (err) {
        res.err = err
    } finally {
        next()
    }
}, responseMiddleware)

router.put('/:id', updateUserValid, (req, res) => {
    try {
        if (res.user) {
            res.data = UserService.update(req.params.id, res.user);
        }
    } catch (err) {
        res.err = err
    } finally {
        next()
    }
}, responseMiddleware)

router.delete('/:id', (req, res) => {
    res.send(`delete ${resource}`)
}, responseMiddleware)


// TODO: Implement route controllers for user

module.exports = router;