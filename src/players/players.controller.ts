
import { Controller, Get,Post,Put,Delete, Param, Body } from '@nestjs/common';

import { PlayersService } from './players.service';
import { Player } from '../entities/player.entity';

@Controller('players')
export class PlayersController {
    constructor(private playersService: PlayersService){};
  @Get()
    findAll(): Promise<Player[]> {
      const players = this.playersService.findAll();
    return players;
  }
  @Get(':id')
    findOne(@Param() params: any): Promise<Player | undefined> {
        const player = this.playersService.getOne(params.id);
        return player;
    }
  @Post()
    addPlayer(@Body() player: Player) : Promise<Player[]> {
      const players = this.playersService.addPlayer(player);
    return players;
  }
  @Put()
    updatePlayer(@Body() player: Player) : Promise<Player | undefined> {
      const updatedPlayer = this.playersService.updatePlayer(player);
    return updatedPlayer;
  }
  @Delete(':id')
      deletePlayer(@Param() params: any) : Promise<Player[]> {
    const players = this.playersService.deletePlayer(params.id);
  return players;
}}