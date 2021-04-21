import { Request, Response } from 'express';
import { UsersService } from '../services/UsersService';
export class UsersController {
  async create(req: Request, res: Response): Promise<Response> {
    const { email } = req.body;

    try {
      const userService = new UsersService();

      const user = await userService.create(email);

      return res.json(user);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}
