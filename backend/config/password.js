const jwt = require('jsonwebtoken');
const { secretOrKey } = require('./keys');

exports.loginUser = async function(user) {
    const userInfo = {
      _id: user._id,
      username: user.username,
      email: user.email
    };
    const token = await jwt.sign(
      userInfo, // payload
      secretOrKey, // sign with secret key
      { expiresIn: 3600 } // tell the key to expire in one hour
    );
    return {
      user: userInfo,
      token
    };
  };