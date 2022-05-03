

//@descr Get User profile
//@routes GET api/users/profile
//@access private

export const getUserProfile = (req, res) => {
    const user = {
        name: 'Max',
        age: 26,
    }

    res.json(user);
}

