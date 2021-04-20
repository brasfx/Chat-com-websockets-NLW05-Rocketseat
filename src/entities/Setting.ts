import {
  Entity,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
  PrimaryColumn,
} from 'typeorm';

import { v4 as uuid } from 'uuid';

@Entity('settings') // nome da tabela
export class Setting {
  @PrimaryColumn()
  id: String;

  @Column()
  username: String;

  @Column()
  chat: Boolean;

  @UpdateDateColumn()
  update_at: Date;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
