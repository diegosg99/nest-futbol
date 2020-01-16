import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { PlayersModule } from './players/players.module';

const typedefs = `
type Player {
  id: Int!
  name: String
  alias: String
}
type Query {
  player(id: Int!): Player
  players(): Player
}
`;

@Module({
  imports: [/* PlayersModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
  }) */PlayersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
