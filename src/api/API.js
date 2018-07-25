import axios from 'axios'
import config from './config'
const baseUrl = "http://localhost:8080"

class API{

  /**
   *  开发者：温浩海
   *  @param {username,password} param
   */

  confirmLogin = param => {
    return axios.post(`${baseUrl}/confirmlogin`, param , config);
  }

  getAllData = () => {
    return axios.get(`${baseUrl}/getalldata`, config);
  }

}

export default API;
