import { Router } from "express";
import { userRegister , loginUser, logoutUser, currentUser, updateProfile, verifyEmail, updatePassword } from "../controllers/user.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { validate } from "../middlewares/validate.middleware.js";
import { registerSchema, updatePasswordSchema } from "../validators/user.validator.js";


const router = Router();

router.post("/register", validate(registerSchema), userRegister);
router.get("/verify-email/:emailToken", verifyEmail )
router.post("/login", loginUser)
router.post("/logout",authenticate,logoutUser)
router.get("/currentUser",authenticate, currentUser)
router.patch("/updateProfile",authenticate,updateProfile)
router.patch("/updatePassword", validate(updatePasswordSchema), authenticate, updatePassword)

export default router;