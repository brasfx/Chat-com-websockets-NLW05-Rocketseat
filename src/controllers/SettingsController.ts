import { SettingsService } from '../services/SettingsServirce';
import { Request, Response } from 'express';

export class SettingsController {
  async create(req: Request, res: Response) {
    const { chat, username } = req.body;

    try {
      const settingsService = new SettingsService();

      const settings = await settingsService.create({ chat, username });

      return res.json(settings);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}
