import axios from 'axios'


export default class PersonService {
  constructor(){
    this.baseUrl = 'http://localhost:3001/persons'
  }
  getAll = () => {
    const request = axios.get(this.baseUrl)
    return request.then(response => response.data)
  }
  create = newObject => {
    const request = axios.post(this.baseUrl, newObject)
    return request.then(response => response.data)
  }
  
  update = (id, newObject) => {
    const request = axios.put(`${this.baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
  }
  delete = (id)=>{
    const request = axios.delete(`${this.baseUrl}/${id}`)
    return request.then(response=>response.data)
  }
}
