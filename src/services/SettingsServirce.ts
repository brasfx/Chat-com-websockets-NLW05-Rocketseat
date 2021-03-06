import { getCustomRepository, Repository } from 'typeorm';
import { SettingsRepository } from '../repositories/SettingsRepository';
import { Setting } from '../entities/Setting';

interface IsettingsCreate {
  chat: boolean;
  username: string;
}
export class SettingsService {
  public settingsRepository: Repository<Setting>;
  constructor() {
    this.settingsRepository = getCustomRepository(SettingsRepository);
  }
  async create({ chat, username }: IsettingsCreate) {
    const userAlreadyExists = await this.settingsRepository.findOne({
      username,
    }); //SELECT * from settings WHERE username = "username" LIMIT 1

    if (userAlreadyExists) {
      throw new Error('Usuário já cadastrado!');
    }
    const settings = this.settingsRepository.create({ chat, username });

    await this.settingsRepository.save(settings);

    return settings;
  }
  async findByUsername(username: string) {
    const settings = await this.settingsRepository.findOne({ username });

    return settings;
  }
  async update(username: string, chat: boolean) {
    await this.settingsRepository
      .createQueryBuilder()
      .update(Setting)
      .set({ chat })
      .where('username = :username', { username })
      .execute();
  }
}
