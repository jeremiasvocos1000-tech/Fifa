import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Player } from './entities/player.entity';
import { FemalePlayer } from './entities/female-player.entity';

@Injectable()
export class PlayersService {

  constructor(
    @InjectRepository(Player)
    private readonly playersRepository: Repository<Player>,

    @InjectRepository(FemalePlayer)
    private readonly femalePlayersRepository: Repository<FemalePlayer>,
  ) {}

  findAll() {
    return this.playersRepository.find({
      take: 20,
    });
  }

  findFemale() {
    return this.femalePlayersRepository.find({
      take: 20,
    });
  }

  findOne(id: number) {
    return this.playersRepository.findOneBy({ id });
  }
}