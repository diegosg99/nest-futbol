import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
/* import { GraphQLModule } from '@nestjs/graphql';
 */import { PlayersModule } from './players/players.module';
import { TypeOrmModule } from '@nestjs/typeorm';
/* import { Connection } from 'typeorm';*/
import { Player } from './entities/player.entity';
@Module({
  imports: [/* GraphQLModule.forRoot({
    typePaths: ['./*.gql'],
    playground: true
  }), */PlayersModule,
   TypeOrmModule.forRoot(
     {type: "mysql",
   host: "localhost",
   port: 3306,
   username: "root",
   password: "root",
   database: "PCFUTBOL",
   entities: [Player],
   synchronize: true})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(/* private readonly connection: Connection */) {}
}
