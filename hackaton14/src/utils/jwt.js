
const jwt = require('jsonwebtoken');

const signToken = (data) => {
    const token = jwt.sign(data, process.env.JWT_SECRET, {
        expiresIn: '1h'
    });
    return token;
}

module.exports = {
    signToken
};