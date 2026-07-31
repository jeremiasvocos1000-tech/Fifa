import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('players_female')
export class FemalePlayer {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  fifa_version!: string;

  @Column()
  fifa_update!: string;

  @Column()
  player_face_url!: string;

  @Column()
  long_name!: string;

  @Column()
  player_positions!: string;

  @Column({ nullable: true })
  club_name!: string;

  @Column({ nullable: true })
  nationality_name!: string;

  @Column()
  overall!: number;

  @Column()
  potential!: number;

  @Column({ nullable: true })
  value_eur!: number;

  @Column({ nullable: true })
  wage_eur!: number;

  @Column()
  age!: number;

  @Column({ nullable: true })
  height_cm!: number;

  @Column({ nullable: true })
  weight_kg!: number;

  @Column({ nullable: true })
  preferred_foot!: string;

  @Column({ nullable: true })
  weak_foot!: number;

  @Column({ nullable: true })
  skill_moves!: number;

  @Column({ nullable: true })
  international_reputation!: number;

  @Column({ nullable: true })
  work_rate!: string;

  @Column({ nullable: true })
  body_type!: string;

  @Column({ nullable: true })
  pace!: number;

  @Column({ nullable: true })
  shooting!: number;

  @Column({ nullable: true })
  passing!: number;

  @Column({ nullable: true })
  dribbling!: number;

  @Column({ nullable: true })
  defending!: number;

  @Column({ nullable: true })
  physic!: number;

  @Column({ nullable: true })
  attacking_crossing!: number;

  @Column({ nullable: true })
  attacking_finishing!: number;

  @Column({ nullable: true })
  attacking_heading_accuracy!: number;

  @Column({ nullable: true })
  attacking_short_passing!: number;

  @Column({ nullable: true })
  attacking_volleys!: number;

  @Column({ nullable: true })
  skill_dribbling!: number;

  @Column({ nullable: true })
  skill_curve!: number;

  @Column({ nullable: true })
  skill_fk_accuracy!: number;

  @Column({ nullable: true })
  skill_long_passing!: number;

  @Column({ nullable: true })
  skill_ball_control!: number;

  @Column({ nullable: true })
  movement_acceleration!: number;

  @Column({ nullable: true })
  movement_sprint_speed!: number;

  @Column({ nullable: true })
  movement_agility!: number;

  @Column({ nullable: true })
  movement_reactions!: number;

  @Column({ nullable: true })
  movement_balance!: number;

  @Column({ nullable: true })
  power_shot_power!: number;

  @Column({ nullable: true })
  power_jumping!: number;

  @Column({ nullable: true })
  power_stamina!: number;

  @Column({ nullable: true })
  power_strength!: number;

  @Column({ nullable: true })
  power_long_shots!: number;

  @Column({ nullable: true })
  mentality_aggression!: number;

  @Column({ nullable: true })
  mentality_interceptions!: number;

  @Column({ nullable: true })
  mentality_positioning!: number;

  @Column({ nullable: true })
  mentality_vision!: number;

  @Column({ nullable: true })
  mentality_penalties!: number;

  @Column({ nullable: true })
  mentality_composure!: number;

  @Column({ nullable: true })
  defending_marking!: number;

  @Column({ nullable: true })
  defending_standing_tackle!: number;

  @Column({ nullable: true })
  defending_sliding_tackle!: number;

  @Column({ nullable: true })
  goalkeeping_diving!: number;

  @Column({ nullable: true })
  goalkeeping_handling!: number;

  @Column({ nullable: true })
  goalkeeping_kicking!: number;

  @Column({ nullable: true })
  goalkeeping_positioning!: number;

  @Column({ nullable: true })
  goalkeeping_reflexes!: number;

  @Column({ nullable: true })
  goalkeeping_speed!: number;

  @Column({ nullable: true })
  player_traits!: string;
}