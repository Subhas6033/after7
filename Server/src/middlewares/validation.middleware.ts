import type { RequestHandler } from "express";
import type { ZodType } from "zod";
import { APIERR } from "../utils/helper.utils.ts";
import { HTTP_STATUS } from "../constants/httpConstants.constant.ts";

export const validate = (
  schema: ZodType,
  source: "body" | "query" | "params" | "headers" = "body",
): RequestHandler => {
  return (req, _res, next) => {
    const result = schema.safeParse(req[source]);

    if (!result.success) {
      throw new APIERR(
        HTTP_STATUS.UNPROCESSABLE_ENTITY,
        "Validation failed",
        result.error.issues.map((issue) => ({
          field: issue.path.join("."),
          message: issue.message,
        })),
      );
    }

    req[source] = result.data;
    next();
  };
};
