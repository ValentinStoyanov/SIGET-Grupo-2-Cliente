import { IsString, IsNotEmpty } from 'class-validator';

export class ReunionDto {
  temas: string;
  descripcion: string;
  hora_inicio: string;
  hora_fin: string;
  asistentes: string[];
  convocante: string;
  
}