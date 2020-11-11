import { ProfessionalRepository } from '../repositories/ProfessionalRepository'

export const getProfessionalListService = (searchTerm: string) => ProfessionalRepository.findProfessionalList(searchTerm);