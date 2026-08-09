const JWT= require('jsonwebtoken');

const secret="dishti710";

//this function generates a token for a user
function createTokenForUser(user){
    const payload={
        _id: user._id,
        email: user.email,
        profileImageURL: user.profileImageURL,
        role: user.role
    };

    const token=JWT.sign(payload, secret);
    return token;
}

//this function receives a token and it validates it 
function validateToken(token){
    const payload=JWT.verify(token,secret);
    return payload;
}

module.exports={
    createTokenForUser, validateToken,
}