import { Controller, Get, Param } from '@nestjs/common';
import { PlayersService } from './players.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../players/aurh/jwt-auth.guard';

@Controller('players')
@UseGuards(JwtAuthGuard)
export class PlayersController {

  constructor(private readonly playersService: PlayersService) {}

  @Get()
  findAll() {
    return this.playersService.findAll();
  }

  @Get('female')
  findAllFemale() {
    return this.playersService.findAllFemale();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playersService.findOne(+id);
  }
}