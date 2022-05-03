import User from '../../models/userModel.js';
import asyncHandler from 'express-async-handler';

//@descr User Registration
//@routes POST api/users
//@access public
export const userRegistration = asyncHandler( async (req, res) => {
    const { email, password } =  req.body;

    const isRegistered = await User.findOne({ email });

    if (isRegistered) {
        res.status(400)
        throw new Error('Пользователь с таким email уже зарегистрирован');
    }

    const user = await User.create({
        email, 
        password,
    });

    res.json(user);
});
