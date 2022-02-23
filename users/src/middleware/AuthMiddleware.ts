import { NextFunction, Request, Response } from 'express';

export const isAuthenticated = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  if (!request.cookies.timesheets_session)
    return response.status(401).json({
      error: 'Unauthenticated user',
      success: false,
    });
  next();
};
