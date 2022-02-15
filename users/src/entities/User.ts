import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('users')
class Users {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
  
  @Column({
    nullable: true
  })
  phone?: string;
  
  @Column({
    nullable: true
  })
  token?: string | null;

  @Column('timestamp', {
    name: 'created_at',
    nullable: true,
    default: 'now',
  })
  created_at?: Date | null;

  constructor(props: Omit<Users, 'id'>, id?: string) {
    if (!this.id) {
      this.id = uuid();
    }

    Object.assign(this, props);
  }
}

export { Users };
