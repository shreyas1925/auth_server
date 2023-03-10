const joi = require('joi');

const userSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(3).max(30).required(),
});

module.exports = { userSchema };