import type { Request, Response } from "express";
import { HTTP_STATUS } from "../../constants/httpConstants.constant.ts";
import { APIRES } from "../../utils/helper.utils.ts";
import { registerUser } from "./auth.service.ts";

/*
  Registers a new user.
 */
export const register = async (req: Request, res: Response): Promise<void> => {
  const user = await registerUser(req.body);

  res
    .status(HTTP_STATUS.CREATED)
    .json(
      new APIRES(HTTP_STATUS.CREATED, { user }, "User registered successfully"),
    );
};
