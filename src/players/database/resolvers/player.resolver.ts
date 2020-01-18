import { Resolver, Mutation } from '@nestjs/graphql';
import { PlayersService } from '../../players.service';
import { Player } from '../../entities/player.entity';
@Resolver('Author')
export class PlayerResolver {
  constructor(private readonly playersService: PlayersService) {}

  @Mutation('createPlayer')
  async createPlayer(player : Player ) {
    return await this.playersService.addPlayer(player);
  }
}