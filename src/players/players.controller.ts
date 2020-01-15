
import { Controller, Get,Post,HttpCode, Req, Param } from '@nestjs/common';
import { Request } from 'express';

@Controller('players')
export class PlayersController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
  @Get(':id')
    findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
    }
  @Post()
    @HttpCode(204)
    create() {
    return 'This action adds a new cat';
}
}