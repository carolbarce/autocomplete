import { ApiClient } from './../infraestructure/apiClient'

//can be change from .env file
const MAX_RESULT = process.env.REACT_APP_MAX_LIST_RESULT;

export const findProfessionalListRepository = async (searchTerm: string) => 
  await ApiClient.get(`/words?sp=${searchTerm}??&max=${MAX_RESULT}`);
