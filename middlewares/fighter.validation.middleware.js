const { fighter } = require('../models/fighter');

const createFighterValid = (req, res, next) => {
    // TODO: Implement validatior for fighter entity during creation
    const { name, health = 100, power, defense } = req.body;
    if (!(
        name && power && defense
    )) {
        res.err = { name: "validation", message: "Please provide information for all fields." }
    }

    // power - number, 1 <= power <= 100
    if (typeof power !== 'number' || power > 100 || power < 1) {
        res.err = { name: "validation", message: "Power must be between 1-100" }
    }

    // defense - number, 1 <= defense <= 10
    if (typeof defense !== 'number' || defense > 10 || defense < 1) {
        res.err = { name: "validation", message: "Defense must be between 1-10" }
    }

    // health - number, 80 <= health <= 120, optional (default - 100)
    if (typeof health !== 'number' || health > 120 || health < 80) {
        res.err = { name: "validation", message: "Health must be between 80-120" }
    }

    if (!res.err) {
        res.fighter = { name, health, power, defense }
    }

    next();
}

const updateFighterValid = (req, res, next) => {
    // TODO: Implement validatior for fighter entity during update
    next();
}

exports.createFighterValid = createFighterValid;
exports.updateFighterValid = updateFighterValid;