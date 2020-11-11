import { ProfessionalRepository } from '../repositories/ProfessionalRepository'

export const getProfessionalListService = async (searchTerm: string) => await ProfessionalRepository.findProfessionalList(searchTerm);