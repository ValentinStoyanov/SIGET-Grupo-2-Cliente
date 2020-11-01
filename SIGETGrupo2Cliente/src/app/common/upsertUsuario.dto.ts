import { IsString, IsNotEmpty } from 'class-validator';

export class UpsertUsuarioDto {

  @IsNotEmpty()
  @IsString()
  username: string;
  password: string;

  
}