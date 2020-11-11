import { ApiClient } from '../infraestructure/apiClient'
import { mapDtoToProfessionalList } from '../domain/ProfessionalListMapper'
import { ProfessionalListDTO } from '../domain/ProfessionalListDTO'

//can be change from .env file
const MAX_RESULT = process.env.REACT_APP_MAX_LIST_RESULT;

export const findProfessionalListRepository = async (searchTerm: string) => {
  const professionaListResponse: ProfessionalListDTO[] = await ApiClient.get(`/words?sp=${searchTerm}??&max=${MAX_RESULT}`);
  return mapDtoToProfessionalList(professionaListResponse);  
} 
