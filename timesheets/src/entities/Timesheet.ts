import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';
//   import { User } from "./User";

@Entity('timesheets')
class Timesheets {
  @PrimaryColumn()
  id?: string;

  @Column()
  project_type: string;

  @Column()
  user_id: string;

  @Column()
  project_title: string;

  @Column()
  project_description: string;

  @Column()
  project_hours: number;

  // @ManyToOne(() => User, {
  //   onUpdate: 'CASCADE',
  //   onDelete: 'CASCADE'
  // })
  // @JoinColumn({name: "user_id"})
  // user?: User;

  @Column('timestamp', {
    name: 'created_at',
    nullable: true,
    default: 'now',
  })
  created_at?: Date | null;

  @Column('timestamp', {
    name: 'updated_at',
    nullable: true,
    default: 'now',
  })
  updated_at?: Date | null;

  constructor(props: Omit<Timesheets, 'id'>, id?: string) {
    if (!this.id) {
      this.id = uuid();
    }

    Object.assign(this, props);
  }
}

export default Timesheets;
