import { Router } from "express";
import { validate } from "../../middlewares/validation.middleware.ts";
import { asyncHandler } from "../../utils/helper.utils.ts";
import { register } from "./auth.controller.ts";
import { registerSchema } from "./auth.validation.ts";

const router = Router();

/*
  POST /api/v1/auth/register
 */
router.post("/register", validate(registerSchema), asyncHandler(register));

export default router;
