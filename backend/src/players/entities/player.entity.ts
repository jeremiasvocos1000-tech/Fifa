import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('players')
export class Player {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  long_name!: string;

  @Column({ nullable: true })
  club_name!: string;

  @Column()
  overall!: number;

  @Column()
  player_positions!: string;

  @Column({ nullable: true })
  nationality_name!: string;
}