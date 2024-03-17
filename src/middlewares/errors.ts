import { Request, Response } from 'express';

export function errors(error: Error, req: Request, res: Response) {
  const errorBody = {
    status: 500,
    message: 'failed',
    data: error.message,
  };
  return res.status(500).json(errorBody);
}
