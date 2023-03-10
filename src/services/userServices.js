const db = require("../.././auth_db/models");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const { insertIntoRedis ,getFromRedis} = require("../utils/redis");

const register = async (userDetails) => {
  
  if(!userDetails.password){
    throw new Error("Password is required");
  }
  
  const hashedPassword = await bcrypt.hash(userDetails.password, 10);

  const user = await db.Users.create({
    email:userDetails.email,
    password: hashedPassword,
  });
  return user;
};

const login = async (userDetails) => {
  const user = await db.Users.findOne({
    where: {
      email:userDetails.email,
    },
  });
  if (!user) {
    throw new Error("User not found");
  }
  const isPasswordValid = await bcrypt.compare(userDetails.password, user.password);
  
  console.log("isPasswordValid",isPasswordValid)
  
  if (!isPasswordValid) {
    throw new Error("Password is not valid");
  }
  
  const token = jwt.sign(user.dataValues, "secret");
  
  // console.log(user);
  await insertIntoRedis(token, user.dataValues.id);

  return token;
};

const validate = async (token) => {

  const userId = await getFromRedis(token);
  console.log(userId);
  
  if (!userId) {
    throw new Error('Unauthorized');
  }

  console.log(jwt.verify(token,process.env.SECRET));

  return jwt.verify(token,process.env.SECRET);

}


module.exports = { register,login,validate };
