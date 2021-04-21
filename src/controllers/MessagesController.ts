import { MessagesService } from '../services/MessagesService';
import { Request, Response } from 'express';

export class MessagesController {
  async create(req: Request, res: Response) {
    try {
      const { admin_id, text, user_id } = req.body;

      const messagesService = new MessagesService();

      const messages = await messagesService.create({
        admin_id,
        text,
        user_id,
      });

      return res.json(messages);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async showByUser(req: Request, res: Response) {
    const { id } = req.params;

    const messagesService = new MessagesService();

    const list = await messagesService.listByUser(id);

    return res.json(list);
  }
}
