
import { Controller, Get,Post,HttpCode, Req, Param, Body } from '@nestjs/common';

import { PlayersService } from './players.service';
import { Request } from 'express';
import { CreatePlayerDto } from './create-player.dto';
import { Player } from './player.interface';

@Controller('players')
export class PlayersController {
    constructor(private playersService: PlayersService){};
  @Get()
  findAll(): Player[] {
    return this.playersService.findAll();
  }
  @Get(':id')
    findOne(@Param() params): Player {
        return this.playersService.getOne(params.id);
    }
  @Post()
    addPlayer(@Body() player: CreatePlayerDto) : any {
    return this.playersService.addPlayer(player);
}
}