import { getCustomRepository, Repository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';
import { User } from '../entities/User';

export class UsersService {
  public userRepository: Repository<User>;
  constructor() {
    this.userRepository = getCustomRepository(UsersRepository);
  }
  async create(email: String) {
    const userExists = await this.userRepository.findOne({ email }); // procura se user existe

    //se existir retorna o user
    if (userExists) {
      return userExists;
    }

    const user = this.userRepository.create({ email }); // se não existir, cria o user
    await this.userRepository.save(user); // salva o novo user

    return user; // retorna novo user
  }
  async findByEmail(email: string) {
    const user = await this.userRepository.findOne({ email });
    return user;
  }
}
