import { ProfessionalRepository } from '../../repositories/ProfessionalRepository'
import { getProfessionalListService } from '../GetProfessionalListService'

const repositoryResult = ["pintle", "pinter", "pintos", "pintar", "pintor"];

describe('GetProfessionalListService tests', () => {
  it('gets a list of professionals', async () => {
    jest.spyOn(ProfessionalRepository, 'findProfessionalList').mockResolvedValue(repositoryResult)

    expect(await getProfessionalListService('pint')).toEqual(repositoryResult)
    expect(ProfessionalRepository.findProfessionalList).toHaveBeenCalledWith('pint')
  })
})
