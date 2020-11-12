import { ApiClient } from '../../infraestructure/apiClient'
import { ProfessionalRepository } from '../ProfessionalRepository'

const ApiResult = [
  {word: "pintle", score: 329},
  {word: "pinter", score: 201},
  {word: "pintos", score: 169},
  {word: "pintar", score: 38},
  {word: "pintor", score: 21}]

describe('FindProfessionalList Repository test', () => {
  it('finds a list of preofessinals that contains search term', async () => {
    const searchTerm = 'pint'
    const mappedResponse = ["pintle", "pinter", "pintos", "pintar", "pintor"]
    const apiClient = jest.spyOn(ApiClient, 'get').mockResolvedValue(ApiResult)

    expect(await ProfessionalRepository.findProfessionalList(searchTerm)).toEqual(mappedResponse)
    expect(apiClient).toHaveBeenCalledWith(`/words?sp=pint??&max=${process.env.REACT_APP_MAX_LIST_RESULT}`)
  })
})