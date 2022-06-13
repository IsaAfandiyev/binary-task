const { user } = require('../models/user');
const createUserValid = (req, res, next) => {
    // TODO: Implement validatior for user entity during creation
    const { email, firstName, lastName, password, phoneNumber } = req.body;

    // all fields are required except id
    if (!(
        email && firstName && lastName && password && phoneNumber
    )) {
        res.err = { name: "validation", message: "Please provide information for all fields." };
    }

    // allow only gmail domain
    if (typeof email !== 'string' || email.split("@").length < 2 || email.split("@")[1] !== "gmail.com") {
        res.err = { name: "validation", message: "Only @gmail.com emails allowed" };
    }

    // phone number format +380xxx xxx xxx
    if (typeof phoneNumber !== 'string' || phoneNumber.length !== "+380xxxxxxxxx".length || !phoneNumber.startsWith("+380")) {
        res.err = { name: "validation", message: "Phone number is not valid." };
    }

    // password - string, min 3 char
    if (typeof password !== 'string' || password.length <= 3) {
        res.err = { name: "validation", message: "Password must be min 3 symbols" };
    }

    if (!res.err) {
        res.user = { email, firstName, lastName, phoneNumber, password }
    }

    next()
}

const updateUserValid = (req, res, next) => {
    // TODO: Implement validatior for user entity during update

    next();
}



exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;