import jsonwebtoken from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';

import User from '../models/userModel.js';

export const protect = asyncHandler(async (req, res, next) => {
    let token = null;
    
    if (req.headers.authorization?.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1];

        const decode = jsonwebtoken.verify(token, process.env.ACCESS_TOKEN);

        const foundUser = await User.findById(decode.userId).select('-password');

        if (foundUser) {
            req.user = foundUser;
            next();
        } else {
            res.status(401);
            throw new Error('Пользователь не авторизован');
        }
    }

    if (!token) {
        res.status(401);
        throw new Error('Пользователь не авторизован');
    }

});