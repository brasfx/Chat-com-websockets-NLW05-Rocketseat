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

  async findByUsername(req: Request, res: Response) {
    const { username } = req.params;

    const settingsService = new SettingsService();

    const settings = await settingsService.findByUsername(username);

    return res.json(settings);
  }

  async update(req: Request, res: Response) {
    const { username } = req.params;
    const { chat } = req.body;

    const settingsService = new SettingsService();

    const settings = await settingsService.update(username, chat);

    return res.json(settings);
  }
}
