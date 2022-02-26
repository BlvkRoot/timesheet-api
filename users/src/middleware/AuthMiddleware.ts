import { NextFunction, Request, Response } from 'express';
import authJson from '../config/auth.json';
import { JwtPayload, verify } from 'jsonwebtoken';

export const isAuthenticated = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const token = request.cookies.timesheets_session;
  if (!token) {
    return response.status(401).json({
      error: 'Unauthenticated user',
      success: false,
    });
  }

  verify(token, authJson.secret, (decoded: JwtPayload) => {
    request.userId = decoded.userId; 
    next();
  });
};
