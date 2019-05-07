import axios from 'axios'

const API_URL = 'https://5c9f632c1afd060014668741.mockapi.io/api'
export class BaseService {
  constructor(baseUrl) {
    this.baseUrl = API_URL + baseUrl
    this.config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  }

  mountUrl(paramsObj) {
    if (!paramsObj) return ''

    const searchParams = new URLSearchParams(paramsObj)
    let urlMonted = ''

    for (var pair of searchParams.entries()) {
      if (pair[0] && pair[1]) {
        urlMonted += `&${pair[0]}=${pair[1]}`
      }
    }

    return `?${urlMonted}`
  }

  async get(url, paramsObj) {
    return await axios.get(`${this.baseUrl}${url}${this.mountUrl(paramsObj)}`, this.config)
  }

  async post(url, object) {
    return await axios.post(`${this.baseUrl}${url}`, object, this.config)
  }

  async put(url, object) {
    return await axios.put(`${this.baseUrl}${url}`, object, this.config)
  }

  async getById(id, token) {
    return await axios.get(`${this.baseUrl}/${id}${token}`, this.config)
  }

  delete(id) {
    return axios.delete(`${this.baseUrl}/${id}`, this.config)
  }
}
