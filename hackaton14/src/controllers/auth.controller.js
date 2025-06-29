const User = require('../models/user.model.js');

const { hashPassword, comparePassword } = require('../utils/hash.util.js');
const { signToken } = require('../utils/jwt.js');

const login =async(req, res) => {
    const { username, password } = req.body;

    const exist = await User.findOne({ where: { username } });
    if (!exist) {
        return res.status(404).json({ message: 'User not found' });
    }

    const validPassword = await comparePassword(password, exist.password);

    if (!validPassword) {
        return res.status(401).json({ message: 'Invalid password' });
    }

    const userResponse = {
        id: exist.id,   
        username: exist.username,
        client: exist.client
    };
    
    const token = signToken(userResponse);

    return res.status(200).json({
        message: 'Login successful',
        token
    });
}

const register = async(req, res) => {
    const { username, password, client } = req.body;

    console.log('Registering user:', username  , client);

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    const exist = await User.findOne({ where: { username } });

    if (exist) {
        return res.status(404).json({ message: 'User is already exist' });
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await User.create({
        username,
        password: hashedPassword,
        client
    });

    const userResponse = {
        id: newUser.id,
        username: newUser.username,
        client: newUser.client
    };

    return res.status(200).json({
        message: 'User registered successfully',
        user: userResponse
    });
}  

module.exports = {
    login,
    register,
};