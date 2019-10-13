/**
 * Created by trungquandev.com's author on 12/10/2019.
 * src/controllers/auth.js
 */
const jwt = require("jsonwebtoken");

/**
 * This module used for verify jwt token
 * @param {*} token 
 * @param {*} secretKey 
 */
let verifyJwtToken = (token, secretKey) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return reject(err);
      }
      resolve(decoded);
    });
  });
}

module.exports = verifyJwtToken;
