
export class CreatePlayerDto {
    readonly id: string;
    readonly name: string;
    readonly alias: string;
    readonly position: string;
    readonly bornDate: string;
    readonly clubs: string[];
  }