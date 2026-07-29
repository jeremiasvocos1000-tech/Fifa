import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Player } from './entities/player.entity';

@Injectable()
export class PlayersService {

  constructor(
    @InjectRepository(Player)
    private readonly playersRepository: Repository<Player>,
  ) {}

  findAll() {
    return this.playersRepository.find({
      take: 20,
    });
  }

  findOne(id: number) {
    return this.playersRepository.findOneBy({ id });
  }
}