import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

import { v4 as uuid } from 'uuid';
import { User } from './User';

@Entity('messages') // nome da tabela
export class Message {
  @PrimaryColumn()
  id: String;

  @Column()
  admin_id: String;

  @Column()
  text: String;

  @JoinColumn({ name: 'user_id' })
  @ManyToOne(() => User)
  user: User;
  @Column()
  user_id: String;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
