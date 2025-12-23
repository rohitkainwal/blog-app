import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";
import asyncHandler  from "express-async-handler";
import CustomError from "../utils/CustomError.util.js";

export const authenticate = asyncHandler(async (req, res, next) => {
  const token = req?.cookies?.token;

  if (!token) {
    return next(new CustomError(401, "please login to access this route"));
  }

  const decodeToken = jwt.verify(token, process.env.JWT_SECRET_KEY);


  const user = await userModel.findById(decodeToken.id);


  if (!user) {
    return next(new CustomError(401, "invalid session please login again"));
  }

  req.user = user;



  next();
});
