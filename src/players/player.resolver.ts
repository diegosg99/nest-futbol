import { Resolver, Query } from '@nestjs/graphql';
 @Resolver('Player')
 export class PlayerResolver{
     @Query(()=> String)
        async hello(){
            return "world";
        }
 }