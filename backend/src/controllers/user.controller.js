import { User } from '../models/user.model.js';

const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // basic validation
        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required!" });
        }

        // check whether the user already exists
        const existing = await User.findOne({ email: email.toLowerCase() });
        if (existing) {
            return res.status(400).json({ message: "User already exists!" });
        }

        // create user
        const user = await User.create({
            username,
            email: email.toLowerCase(),
            password,
            loggedIn: false,
        });

        res.status(201).json({
            message: "User registered",
            user: {
                _id: user._id,
                email: user.email,
                username: user.username
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error!" });
    }
};

export {
    registerUser
};