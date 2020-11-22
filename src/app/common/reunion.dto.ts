import { IsString, IsNotEmpty } from 'class-validator';

export class ReunionDto {
  
  @IsNotEmpty()
  @IsString()
  temas: string;
  descripcion: string;
  horaInicio: string;
  horaFin: string;
  asistentes: string[];
  convocante: string;
}