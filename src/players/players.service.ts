
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from '../entities/player.entity';


@Injectable()
export class PlayersService {
    constructor(
        @InjectRepository(Player)
        private readonly playerRepository: Repository<Player>,
      ) {}

  addPlayer(player: Player): Promise<Player[]> {
    this.playerRepository.save(player);
    return this.playerRepository.find();
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
  updatePlayer(player:Player): Promise <Player | undefined>{
    this.playerRepository.update({id:player.id}, player);
    return this.playerRepository.findOne(player.id);
  }
  deletePlayer(id :any): Promise <Player[]>{
    this.playerRepository.delete({id: id});
    return this.playerRepository.find();
  }
}