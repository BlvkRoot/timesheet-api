import { NextFunction, Request, Response } from 'express';
import authJson from '../config/auth.json';
import { JwtPayload, verify } from 'jsonwebtoken';

interface userPayload {
  id?: string;
  name?: string;
  email?: string;
}

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
  const { id, name, email } = verify(token, authJson.secret) as userPayload;

  request.userId = id;
  request.name = name;
  request.email = email;
  next();
};
