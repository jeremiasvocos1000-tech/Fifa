import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PlayersService } from './players.service';
import { PlayersController } from './players.controller';
import { Player } from './entities/player.entity';
import { FemalePlayer } from './entities/female-player.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Player, FemalePlayer]),
  ],
  controllers: [PlayersController],
  providers: [PlayersService],
})
export class PlayersModule {}