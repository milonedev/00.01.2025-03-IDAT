const bcrypt = require('bcrypt');

const salt = 10

const hashPassword = async(password) => {
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

const comparePassword = async (password, hashedPassword) => {
    console.log('Comparing password:', password, 'with hashed password:', hashedPassword);
    
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
}

module.exports = {
    hashPassword,
    comparePassword
};