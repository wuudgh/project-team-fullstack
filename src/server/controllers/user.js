const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const register = async (req, res) => {
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        await prisma.user.create({
            data: {
                username,
                password: hashedPassword
            }
        });
    
        res.json({ data: 'User created!' });
    } catch (e) {
        console.error(e);

        res.json({ error: "Something went wrong when creating the user.", data: null })
    }
};

const login = async (req, res) => {
    const { username, password } = req.body;

    const foundUser = await prisma.user.findFirst({
        where: {
            username
        }
    });

    if (!foundUser) {
        return res.status(401).json({ error: 'Invalid username or password.', data: null });
    }

    const passwordsMatch = await bcrypt.compare(password, foundUser.password);

    if (!passwordsMatch) {
        return res.status(401).json({ error: 'Invalid username or password.', data: null });
    }

    const token = jwt.sign({ username }, process.env.JWT_SECRET);

    res.json({ data: token });
};

module.exports = {
    register,
    login
};