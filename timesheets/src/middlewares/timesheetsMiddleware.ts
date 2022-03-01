import { NextFunction, Request, Response } from "express";
import * as yup from "yup";
import { validationErrors } from ".";

export const timesheetsMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const schema = yup.object().shape({
    project_title: yup
      .string()
      .required("O campo \"Title\" é obrigatório")
      .nullable(false),
    project_description: yup
      .string()
      .required("O campo \"Description\" é obrigatório")
      .nullable(false),
    project_hours: yup
      .string()
      .required("O campo \"Hours\" é obrigatório")
      .nullable(false),
    project_type: yup
      .string()
      .required("O campo \"Project\" é obrigatório")
      .nullable(false),
  });
  await validationErrors(request, response, next, schema);
};