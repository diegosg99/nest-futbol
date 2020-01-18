
import { Controller, Get,Post,Put,Delete, Param, Body } from '@nestjs/common';

import { PlayersService } from './players.service';
import { Player } from './entities/player.entity';
import { PlayerException } from './exceptions/player.exception';

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
    addPlayer(@Body() player: Player) : Promise<Player | PlayerException> {
      const players = this.playersService.addPlayer(player);
    return players;
  }
  @Put()
    updatePlayer(@Body() player: Player) : Promise<String | PlayerException> {
    return this.playersService.updatePlayer(player);
  }
  @Delete(':id')
      deletePlayer(@Param() params: any) : Promise<Player[]> {
    const players = this.playersService.deletePlayer(params.id);
  return players;
}}