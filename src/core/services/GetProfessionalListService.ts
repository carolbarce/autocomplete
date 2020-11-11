import { findProfessionalListRepository } from './../repositories/GetProfessionalListRepository'

export const getProfessionalListService = (searchTerm: string) => findProfessionalListRepository(searchTerm);