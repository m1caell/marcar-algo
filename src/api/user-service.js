import { BaseService } from './base-service'

export class UserService extends BaseService {
  constructor() {
    super('/user')
  }

  async getUserById(id) {
    return await this.get(`/${id}`)
  }
}
