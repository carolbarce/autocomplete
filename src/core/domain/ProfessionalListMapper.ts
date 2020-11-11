import { ProfessionalListDTO } from './ProfessionalListDTO'

export const mapDtoToProfessionalList = (professionalList: ProfessionalListDTO[]): string[] => 
  professionalList.map((professional: ProfessionalListDTO) => professional.word);
