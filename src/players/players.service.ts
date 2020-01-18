import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Player } from './entities/player.entity';
import { PlayerException } from "./exceptions/player.exception";
import { PlayerRepository } from './database/repositories/player.repository';

@Injectable()
export class PlayersService {
    constructor(
        @InjectRepository(PlayerRepository)
        private readonly playerRepository: PlayerRepository,
      ) {}

  async addPlayer(player: Player): Promise<Player| PlayerException> {
    try {
      return await this.playerRepository.save(player) ? player : new PlayerException;
    } catch (error) {
      return error;
    }
  }
  findAll(): Promise<Player[]> {
    return this.playerRepository.find();
  }
  getOne(id:string): Promise<Player | undefined>{
    return this.playerRepository.findOne(id);
  }
  getOneByName(name:string):Promise<Player[]>{
    const player = this.playerRepository.find({ where: { 'player.name': name } })
    return player;
  }
  async updatePlayer(player:Player): Promise <String | PlayerException>{
    const {raw} = await this.playerRepository.update({id:player.id}, player);
    return raw.affectedRows > 0 ? "Player "+ player.first_name +" updated." : new PlayerException() ;
  }
  deletePlayer(id :any): Promise <Player[]>{
    this.playerRepository.delete({id: id});
    return this.playerRepository.find();
  }
}