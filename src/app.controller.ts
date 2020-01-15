import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PlayersController } from './players/players.controller';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
}
