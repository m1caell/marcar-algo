import { BaseService } from './base-service'

export class PostService extends BaseService {
  constructor() {
    super('/post')
  }

  async getAllPosts() {
    return await this.get('/')
  }

  async save(object) {
    return await this.post('/', object)
  }

  // {
  //   "id": "1",
  //   "title": "Lead Response Assistant",
  //   "image": "http://lorempixel.com/640/480/animals",
  //   "date_event": "2019-06-21T22:59:13.965Z",
  //   "num_participants": 66923,
  //   "total_participants": 10495,
  //   "description": "Global"
  // }
}
