import { findProfessionalListRepository } from '../repositories/findProfessionalListRepository'

export const getProfessionalListService = (searchTerm: string) => findProfessionalListRepository(searchTerm);