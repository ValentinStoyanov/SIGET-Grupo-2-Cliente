import { IsString, IsNotEmpty } from 'class-validator';

export class UsuarioDto {

  @IsNotEmpty()
  @IsString()
  username: string;
  password: string;

  
}