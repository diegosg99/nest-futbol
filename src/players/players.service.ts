
import { Injectable } from '@nestjs/common';
import { Player } from './player.interface';
import { players } from '../../src/data/data.json';

console.log(players);
@Injectable()
export class PlayersService {
  private players: Player[] = players;

  addPlayer(player: Player) {
    this.players.push(player);
    return this.players;
  }

  findAll(): Player[] {
    return this.players;
  }
  getOne(id:String){
    return this.players.find(player => player.id === id);
  }
}