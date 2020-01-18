import {EntityRepository} from "typeorm";
import {Player} from "../../entities/player.entity";
import { Repository } from 'typeorm';

@EntityRepository(Player)
export class PlayerRepository extends Repository<Player> {
  getPlayers() {
    return this.find();
  }
  addPlayer(player : Player) {
    return this.save(player);
  }
  updatePlayer(player : Player) {
    return this.update({id: player.id},player);
  }
  deletePlayer(id : any) {
    return this.delete(id);
  }
}