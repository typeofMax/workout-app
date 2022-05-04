import jsonwebtoken from 'jsonwebtoken';

export const generateToken = (userId) => {
    return jsonwebtoken.sign(
        {
            userId,
        },
        process.env.ACCESS_TOKEN,
        {
            expiresIn: '10d',
        }
    );
};
