import { IsString, IsNotEmpty } from 'class-validator';

export class ReunionDto {

  temas: string;
  descripcion: string;
  hora_fin: string;
  hora_inicio: string;
  asistentes: string;
  convocante: string;
  
}