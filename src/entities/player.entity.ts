
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Player {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ length: 255 })
  first_name: string;

  @Column({length:255})
  last_name: string;

  @Column({length:30})
  alias: string;

  @Column()
  club_id: string;

  @Column()
  position_id: string;
}