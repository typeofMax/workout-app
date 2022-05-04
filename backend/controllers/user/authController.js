import User from '../../models/userModel.js';
import asyncHandler from 'express-async-handler';
import { generateToken } from '../../helper/generateToken.js';

//@descr User authentication
//@routes POST api/users/login
//@access public
export const userAuthentication = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        const token = generateToken(user._id);
        res.json({ user, token });
    } else {
        res.statusCode(401);
        throw new Error('Неправильный email или пароль');
    }

});
