import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
/* import { GraphQLModule } from '@nestjs/graphql';
 */import { PlayersModule } from './players/players.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './players/entities/player.entity';
import { PlayerRepository } from "./players/database/repositories/player.repository"
/* import { typeDefs } from './typeDefs';
 */
@Module({
  imports: [
    /* GraphQLModule.forRoot({
      typePaths: ['src/players/database/*.graphql'],
      installSubscriptionHandlers: true,
    }), */PlayersModule,
   TypeOrmModule.forRoot(
     {type: "mysql",
   host: "localhost",
   port: 3306,
   username: "root",
   password: "root",
   database: "PCFUTBOL",
   entities: [Player, PlayerRepository],
   synchronize: true})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
