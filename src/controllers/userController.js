const { userSchema } = require("../schemas/user.schema");
const userServices = require("../services/userServices");

const register = async (req, res) => {
  try {
    const { error, value } = userSchema.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      throw new Error(error.message);
    }
    console.log("req.body",req.body)
    const user = await userServices.register(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { error, value } = userSchema.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      throw new Error(error.message);
    }

    const user = await userServices.login(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const validate = async (req, res) => {
  try {
      const token = req.headers.authorization.split(' ')[1];
      console.log(token);
      const validatedData = await userServices.validate(token);
      res.status(200).json(validatedData);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
module.exports = { register,login,validate };
