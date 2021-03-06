import api from '../../api'

class CharacterService {
  static getCharacters(request) {
    const query = (request && request.query) || ''
    const page = (request && request.page) || 1
    const limit = (request && request.limit) || 10
    const path = `/people?q=${query}&_page=${page}&_limit=${limit}`
    return api.get(path)
  }

  static getHomeworlds() {
    return api.get('/planets')
  }

  static saveCharacter(character) {
    return api.patch(`/people/${character.id}`, character)
  }
}

export default CharacterService
